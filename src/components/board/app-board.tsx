import Board from '@cloudscape-design/board-components/board';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { i18nBoardStrings } from './board-constants.ts';
import { useAllWidgets, useStoredLayoutsAtom } from '../../hooks';
import { storedLayoutsToBoardItems } from '../../utils/stored-layouts-to-board-items.ts';
import { toStoredWidgetLayout } from '../../utils';
import { EmptyBoardState } from './empty-board-state.tsx';
import { TableBoardItem } from '../table-widget/table-board-item.tsx';
import { DashboardHeader } from '../layout/dashboard-header.tsx';
import { SimpleInfoBoardItem } from '../simple-info-widget/simple-info-board-item.tsx';

export const AppBoard = () => {
  const all = useAllWidgets();
  const [storedLayouts, setStoredLayouts] = useStoredLayoutsAtom();

  return (
    <SpaceBetween size={'m'} direction={'vertical'}>
      <DashboardHeader />
      <Board
        items={storedLayoutsToBoardItems(storedLayouts, all)}
        renderItem={(item, actions) => {
          if (item.data.type === 'table') return <TableBoardItem id={item.id} actions={actions} />;
          if (item.data.type === 'info')
            return <SimpleInfoBoardItem id={item.id} actions={actions} />;
          return <>Not implemented!</>;
        }}
        onItemsChange={({ detail }) => {
          setStoredLayouts(detail.items.map(toStoredWidgetLayout));
        }}
        i18nStrings={i18nBoardStrings}
        empty={<EmptyBoardState />}
      />
    </SpaceBetween>
  );
};
