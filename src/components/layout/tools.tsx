import { HelpPanel, SpaceBetween, Toggle } from '@cloudscape-design/components';
import { useRecoilState } from 'recoil';
import { Density, Mode } from '@cloudscape-design/global-styles';
import { awsUIThemeDensityAtom, awsUIThemeModeAtom } from '../../recoil/atoms.ts';

export const Tools = () => {
  const [awsUIThemeMode, setAwsUIThemeMode] = useRecoilState(awsUIThemeModeAtom);
  const [awsUIThemeDensity, setAwsUIThemeDensity] = useRecoilState(awsUIThemeDensityAtom);

  return (
    <HelpPanel header="Settings">
      <SpaceBetween size="xl" direction="vertical">
        <Toggle
          onChange={() => setAwsUIThemeMode((prev) => (prev === Mode.Dark ? Mode.Light : Mode.Dark))}
          checked={awsUIThemeMode === Mode.Dark}
        >
          Dark Mode
        </Toggle>
        <Toggle
          onChange={() =>
            setAwsUIThemeDensity((prev) => (prev === Density.Compact ? Density.Comfortable : Density.Compact))
          }
          checked={awsUIThemeDensity === Density.Compact}
        >
          Compact Mode
        </Toggle>
      </SpaceBetween>
    </HelpPanel>
  );
};
