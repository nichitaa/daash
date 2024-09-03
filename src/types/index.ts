import type { StatusIndicatorProps, TableProps } from '@cloudscape-design/components';
import {
  BoardItemDefinition,
  BoardItemDefinitionBase,
} from '@cloudscape-design/board-components/internal/interfaces';
import { IconProps } from '@cloudscape-design/components/icon/interfaces';

export interface ClientColumnDefinition
  extends Pick<
    TableProps.ColumnDefinition<any>,
    'sortingField' | 'sortingComparator' | 'isRowHeader'
  > {
  /** unique column id */
  id: string;
  /** column header*/
  header: string;

  /** can apply custom formatting for the displayed value */
  getValue(item: any): string;

  /** highlights the value in the column with specific status */
  getStatusType?(item: any): StatusIndicatorProps.Type;

  /** indicating that this column can not be removed even from table preferences */
  alwaysVisible?: boolean;
}

export interface SimpleInfoWidgetData {
  /** label displayed in the UI */
  label: string;
  /** value for given label - displayed in the UI */
  value: string;
  /** if you need to highlight the value (warn/success/error... styles)  */
  statusType?: StatusIndicatorProps.Type;
}

export interface WidgetBaseProps<TData = any> {
  /** provides data for the widget */
  getData(): Promise<TData[]>;

  /** if refreshInterval is passed, then widget will automatically refresh widget data */
  refreshInterval?: number;
}

export interface SimpleInfoWidgetProps extends WidgetBaseProps<SimpleInfoWidgetData[]> {}

export interface TableWidgetProps extends WidgetBaseProps {
  /** table column definitions */
  columnDefinitions: ClientColumnDefinition[];
}

export interface StoredWidgetLayout extends Omit<BoardItemDefinition<any>, 'data'> {}

export interface WidgetDefinition<TWidgetProps = any> {
  /** unique id for the widget */
  id: string;
  /** widget title displayed in the UI */
  title: string;
  /** description displayed in the "Add Widget" board item */
  description: string;
  /** icon displayed in the "Add Widget" board item */
  icon?: IconProps.Name;
  /** currently supporting table / simple-info widget */
  type: 'table' | 'simple-info';
  /** custom properties based on widget type */
  props: TWidgetProps;
  /**
   * convenient definition for widget default dimensions and limits
   * example:
   * {
   *   defaultColumnSpan: 2,
   *   defaultRowSpan: 3,
   *   minColumnSpan: 2,
   *   minRowSpan: 3,
   * }
   */
  definition: BoardItemDefinitionBase<any>['definition'];
}

export interface BrandDefinition {
  name: string;
}

export type TableWidgetDefinition = WidgetDefinition<TableWidgetProps>;
export type SimpleInfoWidgetDefinition = WidgetDefinition<SimpleInfoWidgetProps>;
