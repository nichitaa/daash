import { AuthReactRouter, RoutesRoot } from '@nichitaa/auth-react-router';
import { routes } from './routes.tsx';
import { useApplyThemeAndDensity } from './hooks';

export const App = () => {
  useApplyThemeAndDensity();
  return (
    <AuthReactRouter routes={routes}>
      <RoutesRoot />
    </AuthReactRouter>
  );
};
