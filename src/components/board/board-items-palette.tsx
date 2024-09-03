import Header from '@cloudscape-design/components/header';
import BoardItem from '@cloudscape-design/board-components/board-item';
import { ItemsPalette } from '@cloudscape-design/board-components';
import { i18nBoardItemStrings } from './board-constants.ts';
import { isEmpty } from 'remeda';
import Box from '@cloudscape-design/components/box';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { Icon } from '@cloudscape-design/components';
import { useAllWidgets, useStoredLayoutsAtom } from '../../hooks';
import { widgetDefinitionToBoardItemDefinitionBase } from '../../utils';

export const BoardItemsPalette = () => {
  const all = useAllWidgets();

  const [activeWidgets] = useStoredLayoutsAtom();

  const hiddenWidgets = all
    .filter((x) => {
      const isActive = activeWidgets?.find((y) => x.id === y.id);
      return !isActive;
    })
    .map(widgetDefinitionToBoardItemDefinitionBase);

  if (isEmpty(hiddenWidgets)) {
    return (
      <>
        <SpaceBetween size={'s'} alignItems={'center'}>
          <Box variant={'strong'}>No widgets</Box>
          <Box variant={'small'}>All widgets are on the dashboard!</Box>
        </SpaceBetween>
      </>
    );
  }

  return (
    <ItemsPalette
      items={hiddenWidgets}
      renderItem={(item) => (
        <BoardItem i18nStrings={i18nBoardItemStrings} header={<Header>{item.data.title}</Header>}>
          <SpaceBetween size={'s'} direction={'horizontal'}>
            {item.data.icon && <Icon name={item.data.icon} size={'large'} />}
            <p>{item.data.description}</p>
          </SpaceBetween>
        </BoardItem>
      )}
      i18nStrings={{}}
    />
  );
};
