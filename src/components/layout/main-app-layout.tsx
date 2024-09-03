import { AppLayout } from '@cloudscape-design/components';
import { Outlet } from 'react-router-dom';
import { AppSplitPanel } from './app-split-panel.tsx';
import { AppNavigation } from './app-navigation.tsx';
import { useObservableEagerState } from 'observable-hooks';
import { allWidgets$, splitPanelOpen$ } from '../../rx-state';
import { useLocalStorage } from 'react-use';
import { useRecoilValue } from 'recoil';
import { storedWidgetsAtom } from '../../recoil/atoms.ts';
import { LoadingSpinner } from '../utils';
import { isNullish } from 'remeda';
import { useSyncRxState, useSyncStoredWidgetsOnce } from '../../hooks';
import { Tools } from './tools.tsx';

const splitPanelMaxSize = 360;
const splitPanelSizeLsKey = 'SplitPanelSize';

export const MainAppLayout = () => {
  useSyncStoredWidgetsOnce();
  const storedWidgets = useRecoilValue(storedWidgetsAtom);
  const syncedAllWidgets = useSyncRxState(allWidgets$, window.getWidgetsDefinition);
  const splitPanelOpen = useObservableEagerState(splitPanelOpen$);
  const [splitPanelSize, setSplitPanelSize] = useLocalStorage(
    splitPanelSizeLsKey,
    splitPanelMaxSize,
  );

  return (
    <AppLayout
      contentType={'dashboard'}
      content={!syncedAllWidgets || isNullish(storedWidgets) ? <LoadingSpinner /> : <Outlet />}
      navigation={<AppNavigation />}
      splitPanel={<AppSplitPanel />}
      tools={<Tools />}
      splitPanelOpen={splitPanelOpen}
      splitPanelPreferences={{ position: 'side' }}
      onSplitPanelToggle={({ detail }) => splitPanelOpen$.next(detail.open)}
      splitPanelSize={splitPanelSize}
      onSplitPanelResize={(event) =>
        setSplitPanelSize(Math.min(event.detail.size, splitPanelMaxSize))
      }
    />
  );
};
