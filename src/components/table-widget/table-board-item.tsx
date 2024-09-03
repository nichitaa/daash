import BoardItem from '@cloudscape-design/board-components/board-item';
import Header from '@cloudscape-design/components/header';
import { i18nBoardItemStrings } from '../board/board-constants.ts';
import {
  CollectionPreferences,
  CollectionPreferencesProps,
  Pagination,
  PropertyFilter,
  Table,
} from '@cloudscape-design/components';
import { BoardProps } from '@cloudscape-design/board-components';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { toFilteringProperties } from '../app-table/to-filtering-properties.tsx';
import { useWidget, useWidgetDataHandlers } from '../../hooks';
import { useLocalStorage } from 'react-use';
import { toColumnDefinition } from '../app-table/to-column-definition.tsx';
import { getMatchesCountText } from '../app-table/get-matches-count-text.tsx';
import { getCollectionPreferencesProps } from '../app-table/get-collection-preferences-props.ts';
import { TableEmptyState } from '../app-table/table-empty-state.tsx';
import { BoardSettings } from './board-settings.tsx';
import * as awsui from '@cloudscape-design/design-tokens';
import { TableWidgetProps } from '../../types';

export interface CustomBoardItemProps {
  id: string;
  actions: BoardProps.ItemActions;
}

export const TableBoardItem = ({ id, actions }: CustomBoardItemProps) => {
  const widget = useWidget<TableWidgetProps>(id);
  const {
    title,
    props: { getData, columnDefinitions, refreshInterval },
  } = widget;

  const { data, loading, lastUpdatedAt, refetch } = useWidgetDataHandlers(getData, refreshInterval);

  const [preferences, setPreferences] = useLocalStorage<CollectionPreferencesProps.Preferences>(
    `preferences#${id}`,
    {},
  );

  const { items, filteredItemsCount, collectionProps, paginationProps, propertyFilterProps } =
    useCollection(data ?? [], {
      pagination: { pageSize: preferences?.pageSize, defaultPage: 10 },
      sorting: {},
      propertyFiltering: {
        filteringProperties: columnDefinitions.map(toFilteringProperties),
      },
    });

  return (
    <BoardItem
      disableContentPaddings
      header={<Header counter={`(${items.length})`}>{title}</Header>}
      i18nStrings={i18nBoardItemStrings}
      settings={<BoardSettings info={lastUpdatedAt} actions={actions} refresh={refetch} />}
    >
      <div style={{ padding: awsui.spaceScaledL, paddingTop: 0 }}>
        <Table
          {...collectionProps}
          items={items}
          variant={'borderless'}
          stickyHeader
          loading={loading}
          loadingText={'Loading data...'}
          columnDefinitions={columnDefinitions.map(toColumnDefinition)}
          columnDisplay={preferences?.contentDisplay}
          stripedRows={preferences?.stripedRows}
          contentDensity={preferences?.contentDensity}
          stickyColumns={preferences?.stickyColumns}
          wrapLines={preferences?.wrapLines}
          resizableColumns
          enableKeyboardNavigation
          empty={<TableEmptyState />}
          pagination={<Pagination {...paginationProps} />}
          filter={
            <PropertyFilter
              {...propertyFilterProps}
              countText={getMatchesCountText(filteredItemsCount)}
              expandToViewport
            />
          }
          preferences={
            <CollectionPreferences
              {...getCollectionPreferencesProps(columnDefinitions)}
              preferences={preferences}
              onConfirm={({ detail }) => setPreferences(detail)}
            />
          }
        />
      </div>
    </BoardItem>
  );
};
