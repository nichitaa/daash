import SpaceBetween from '@cloudscape-design/components/space-between';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import { splitPanelOpen$ } from '../../rx-state';

export const EmptyBoardState = () => {
  return (
    <Box margin={{ vertical: 'xxxl' }} textAlign="center" color="inherit">
      <SpaceBetween size="m">
        <Box variant="strong" color="inherit">
          No widgets
        </Box>
        <Box variant="p" color="inherit">
          There are no widgets on the dashboard.
        </Box>
        <Button
          iconName="add-plus"
          onClick={() => {
            splitPanelOpen$.next(true);
          }}
        >
          Add widget
        </Button>
      </SpaceBetween>
    </Box>
  );
};
