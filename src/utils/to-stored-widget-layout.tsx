import { BoardItemDefinition } from '@cloudscape-design/board-components/internal/interfaces';
import { StoredWidgetLayout } from '../types';

export const toStoredWidgetLayout = <T extends Omit<BoardItemDefinition<any>, 'data'>>(
  item: T,
): StoredWidgetLayout => {
  return {
    id: item.id,
    definition: item.definition,
    columnSpan: item.columnSpan,
    columnOffset: item.columnOffset,
    rowSpan: item.rowSpan,
  };
};