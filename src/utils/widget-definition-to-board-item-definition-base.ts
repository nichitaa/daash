import { WidgetDefinition } from '../types';
import { BoardItemDefinitionBase } from '@cloudscape-design/board-components/internal/interfaces';

export const widgetDefinitionToBoardItemDefinitionBase = (
  item: WidgetDefinition,
): BoardItemDefinitionBase<any> => {
  return {
    id: item.id,
    definition: item.definition,
    data: {
      title: item.title,
      description: item.description,
      icon: item.icon,
    },
  };
};