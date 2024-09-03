import BoardItem from '@cloudscape-design/board-components/board-item';
import Header from '@cloudscape-design/components/header';
import { i18nBoardItemStrings } from '../board/board-constants.ts';
import { ColumnLayout } from '@cloudscape-design/components';
import Box from '@cloudscape-design/components/box';
import { BoardSettings } from '../table-widget/board-settings.tsx';
import { CustomBoardItemProps } from '../table-widget/table-board-item.tsx';
import { useWidget, useWidgetDataHandlers } from '../../hooks';
import { SimpleInfoWidgetData, SimpleInfoWidgetProps } from '../../types';
import { LoadingSpinner, MaybeStatusIndicator } from '../utils';

export const SimpleInfoBoardItem = ({ id, actions }: CustomBoardItemProps) => {
  const widget = useWidget<SimpleInfoWidgetProps>(id);
  const {
    title,
    props: { getData, refreshInterval },
  } = widget;

  const { data, loading, lastUpdatedAt, refetch } = useWidgetDataHandlers<SimpleInfoWidgetData[]>(
    getData,
    refreshInterval,
  );

  return (
    <BoardItem
      header={<Header>{title}</Header>}
      i18nStrings={i18nBoardItemStrings}
      settings={<BoardSettings info={lastUpdatedAt} actions={actions} refresh={refetch} />}
    >
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ColumnLayout columns={data?.length}>
          {data?.map(({ value, label, statusType }, index) => {
            return (
              <div key={`${label}#${index}`}>
                <Box variant="awsui-key-label">{label}</Box>
                <MaybeStatusIndicator type={statusType}>{value}</MaybeStatusIndicator>
              </div>
            );
          })}
        </ColumnLayout>
      )}
    </BoardItem>
  );
};
