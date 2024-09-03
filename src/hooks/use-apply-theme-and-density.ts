import { useEffect } from 'react';
import { applyDensity, applyMode } from '@cloudscape-design/global-styles';
import { useRecoilValue } from 'recoil';
import { awsUIThemeDensityAtom, awsUIThemeModeAtom } from '../recoil/atoms.ts';

export const useApplyThemeAndDensity = () => {
  const awsUIThemeMode = useRecoilValue(awsUIThemeModeAtom);
  const awsUIThemeDensity = useRecoilValue(awsUIThemeDensityAtom);

  useEffect(() => {
    applyDensity(awsUIThemeDensity);
    applyMode(awsUIThemeMode);
  }, [awsUIThemeMode, awsUIThemeDensity]);

};