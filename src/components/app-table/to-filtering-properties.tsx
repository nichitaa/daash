import { ClientColumnDefinition } from '../../types';
import { PropertyFilterProperty } from '@cloudscape-design/collection-hooks';

import { stringOperators } from './string-operators.tsx';

export const toFilteringProperties = (
  clientDefinition: ClientColumnDefinition,
): PropertyFilterProperty => {
  return {
    key: clientDefinition.id,
    propertyLabel: clientDefinition.header,
    groupValuesLabel: `${clientDefinition.header} values`,
    operators: stringOperators,
  };
};