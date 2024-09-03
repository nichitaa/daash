import { BrandDefinition, WidgetDefinition } from './index.ts';

declare global {
  interface Window {
    getWidgetsDefinition(): WidgetDefinition[]
    getBrandDefinition(): BrandDefinition;
  }
}
