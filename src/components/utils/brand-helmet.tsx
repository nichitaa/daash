import { Helmet } from 'react-helmet';
import { useSyncRxState } from '../../hooks';
import { brandDefinition$ } from '../../rx-state';
import { useObservableEagerState } from 'observable-hooks';

export const BrandHelmet = () => {
  useSyncRxState(brandDefinition$, window.getBrandDefinition);
  const brand = useObservableEagerState(brandDefinition$);

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{brand?.name}</title>
    </Helmet>
  );
};
