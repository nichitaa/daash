import { BoardItemsPalette } from '../board/board-items-palette.tsx';
import { SplitPanel } from '@cloudscape-design/components';

export const AppSplitPanel = () => {
  return (
    <SplitPanel header="Add widgets" closeBehavior="hide" hidePreferencesButton>
      <BoardItemsPalette />
    </SplitPanel>
  );
};
