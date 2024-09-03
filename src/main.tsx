import '@cloudscape-design/global-styles/index.css';
import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';
import { applyMode, applyDensity, Density, Mode } from '@cloudscape-design/global-styles';
import { BrowserRouter } from 'react-router-dom';
import { I18nProvider } from '@cloudscape-design/components/i18n';
import enMessages from '@cloudscape-design/components/i18n/messages/all.en';
import { RecoilRoot } from 'recoil';
import { BrandHelmet } from './components/utils';

applyMode(Mode.Dark);
applyDensity(Density.Compact);

const root = document.getElementById('root')!;
const app = (
  <>
    <RecoilRoot>
      <I18nProvider messages={[enMessages]} locale={'en'}>
        <BrowserRouter>
          <BrandHelmet />
          <App />
        </BrowserRouter>
      </I18nProvider>
    </RecoilRoot>
  </>
);

createRoot(root).render(app);
