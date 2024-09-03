import { StatusIndicator, StatusIndicatorProps } from '@cloudscape-design/components';
import { PropsWithChildren } from 'react';
import { isNullish } from 'remeda';

export const MaybeStatusIndicator = ({
  children,
  type,
}: PropsWithChildren<{ type?: StatusIndicatorProps.Type }>) => {
  if (isNullish(type)) return children;
  return <StatusIndicator type={type}>{children}</StatusIndicator>;
};
