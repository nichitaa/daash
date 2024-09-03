import { atom } from 'recoil';
import { localStorageEffect } from './effects.ts';
import { StoredWidgetLayout } from '../types';
import { Density, Mode } from '@cloudscape-design/global-styles';

export const storedWidgetsAtom = atom<StoredWidgetLayout[] | null>({
  key: 'storedWidgetsAtom',
  default: null,
  effects: [localStorageEffect('storedWidgetsAtom')],
});

export const awsUIThemeModeAtom = atom({
  key: 'awsUIThemeModeAtom',
  default: Mode.Dark,
  effects: [localStorageEffect('theme')],
});

export const awsUIThemeDensityAtom = atom({
  key: 'awsUIThemeDensityAtom',
  default: Density.Compact,
  effects: [localStorageEffect('density')],
});