import { StoredWidgetLayout, WidgetDefinition } from '../types';
import { widgetDefinitionToBoardItem } from './widget-definition-to-board-item.tsx';
import { assertIsDefined } from './assert-is-defined.ts';

export const storedLayoutsToBoardItems = (
  storedLayouts: StoredWidgetLayout[],
  widgets: WidgetDefinition[],
) => {
  return storedLayouts.map((layout) => {
    const item = widgets.find((x) => x.id === layout.id);
    assertIsDefined(item);
    return widgetDefinitionToBoardItem(item, layout);
  });
};
