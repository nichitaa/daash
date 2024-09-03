import { BehaviorSubject } from 'rxjs';
import { BrandDefinition, WidgetDefinition } from '../types';

export const splitPanelOpen$ = new BehaviorSubject<boolean>(false);
export const allWidgets$ = new BehaviorSubject<WidgetDefinition[] | undefined>(undefined);
export const brandDefinition$ = new BehaviorSubject<BrandDefinition | undefined>(undefined);
