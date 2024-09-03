import { ButtonGroup } from '@cloudscape-design/components';
import { BoardProps } from '@cloudscape-design/board-components';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Box from '@cloudscape-design/components/box';
import { isNullish } from 'remeda';

export const BoardSettings = ({
  actions,
  info,
  refresh,
}: {
  actions: BoardProps.ItemActions;
  info?: string;
  refresh(): Promise<void>;
}) => {
  return (
    <SpaceBetween size={'s'} direction={'horizontal'} alignItems={'center'}>
      {!isNullish(info) && <Box variant={'small'}>{info}</Box>}
      <ButtonGroup
        onItemClick={({ detail }) => {
          if (detail.id === 'remove-widget') {
            actions.removeItem();
          }
          if (detail.id === 'refresh-widget') {
            void refresh();
          }
        }}
        items={[
          {
            type: 'group',
            text: 'Data actions',
            items: [
              {
                type: 'icon-button',
                iconName: 'refresh',
                id: 'refresh-widget',
                text: 'Refresh data',
              },
            ],
          },
          {
            type: 'icon-button',
            iconName: 'remove',
            id: 'remove-widget',
            text: 'Remove widget',
          },
        ]}
        variant="icon"
      />
    </SpaceBetween>
  );
};
