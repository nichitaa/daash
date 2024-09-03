import { useCallback, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useInterval } from 'react-use';
import { isNullish } from 'remeda';

export const useWidgetDataHandlers = <TData = any>(getData: () => Promise<TData>, refreshInterval?: number) => {
  const [data, setData] = useState<TData | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastUpdatedAt, setLastUpdatedAt] = useState('');

  const refetch = useCallback(
    async (isFirst?: boolean) => {
      if (isFirst) {
        setLoading(true);
      }
      const data = await getData();
      setLastUpdatedAt(`updated at: ${dayjs().format('HH:mm:ss')}`);
      setData(data);
      if (isFirst) {
        setLoading(false);
      }
    },
    [getData],
  );


  useInterval(
    () => {
      void refetch();
    },
    isNullish(refreshInterval) ? null : refreshInterval,
  );

  useEffect(() => {
    void refetch(true);
  }, [refetch]);

  return { data, refetch, lastUpdatedAt, loading };
};
