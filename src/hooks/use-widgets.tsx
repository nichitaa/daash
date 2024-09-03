import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { storedWidgetsAtom } from '../recoil/atoms.ts';
import { isNullish } from 'remeda';
import { assertIsDefined, toStoredWidgetLayout } from '../utils';
import { useObservableEagerState } from 'observable-hooks';
import { allWidgets$ } from '../rx-state';
import { WidgetDefinition } from '../types';

export const useAllWidgets = () => {
  const allWidgets = useObservableEagerState(allWidgets$);
  assertIsDefined(allWidgets);
  return allWidgets;
};


export const useWidget = <TWidgetProps,>(id: string) => {
  const all = useAllWidgets();
  const widget = all.find((x) => x.id === id);
  assertIsDefined(widget);
  return widget as WidgetDefinition<TWidgetProps>;
};

export const useSyncStoredWidgetsOnce = () => {
  const [storedWidgets, setStoredWidgets] = useRecoilState(storedWidgetsAtom);

  useEffect(() => {
    if (!isNullish(storedWidgets)) return;
    const all = window.getWidgetsDefinition();
    const newStoredWidgets = all.map(toStoredWidgetLayout);
    setStoredWidgets(newStoredWidgets);
  }, [storedWidgets, setStoredWidgets]);
};

export const useStoredLayoutsAtom = () => {
  const [state, setState] = useRecoilState(storedWidgetsAtom);
  assertIsDefined(state);
  return [state, setState];
};
