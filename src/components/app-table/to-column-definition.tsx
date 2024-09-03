import { ClientColumnDefinition } from '../../types';
import type { TableProps } from '@cloudscape-design/components';
import { CustomCell } from './custom-cell.tsx';

export const toColumnDefinition = (
  clientDefinition: ClientColumnDefinition,
): TableProps.ColumnDefinition<any> => {
  return {
    id: clientDefinition.id,
    header: clientDefinition.header,
    sortingField: clientDefinition.sortingField,
    sortingComparator: clientDefinition.sortingComparator,
    isRowHeader: clientDefinition.isRowHeader,
    cell: (item) => <CustomCell {...clientDefinition} item={item} />,
  };
};