import { ClientColumnDefinition } from '../../types';
import { MaybeStatusIndicator } from '../utils';

export const CustomCell = ({
  getStatusType,
  item,
  getValue,
}: Pick<ClientColumnDefinition, 'getStatusType' | 'getValue'> & { item: any }) => {
  const value = getValue(item);
  const statusType = getStatusType?.(item);

  return <MaybeStatusIndicator type={statusType}>{value}</MaybeStatusIndicator>;
};
