import { StoredWidgetLayout, WidgetDefinition } from '../types';
import { BoardItemDefinition } from '@cloudscape-design/board-components/internal/interfaces';

export const widgetDefinitionToBoardItem = (
  item: WidgetDefinition,
  storedLayout?: StoredWidgetLayout,
): BoardItemDefinition<any> => {
  return {
    id: item.id,
    definition: item.definition,
    data: {
      title: item.title,
      description: item.description,
      icon: item.icon,
      type: item.type,
    },
    columnOffset: storedLayout?.columnOffset,
    rowSpan: storedLayout?.rowSpan,
    columnSpan: storedLayout?.columnSpan,
  };
};
