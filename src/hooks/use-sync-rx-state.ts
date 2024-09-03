import { useObservableEagerState } from 'observable-hooks';
import { useEffect } from 'react';
import { isNullish } from 'remeda';
import { BehaviorSubject } from 'rxjs';

export const useSyncRxState = <TData>(subject: BehaviorSubject<TData>, fn: () => TData) => {
  const value = useObservableEagerState(subject);
  useEffect(() => {
    if (isNullish(value)) {
      subject.next(fn());
    }
  }, [value, fn]);

  return !isNullish(value);
};
