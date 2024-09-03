import { SideNavigation, SideNavigationProps } from '@cloudscape-design/components';
import { useLocation, useNavigate } from 'react-router-dom';

const items: SideNavigationProps['items'] = [{ type: 'link', text: `Dashboard`, href: `/dassh` }];

export function AppNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SideNavigation
      header={{
        href: '/',
        text: 'StatusLens',
      }}
      activeHref={location.pathname}
      items={items}
      onFollow={(event) => {
        event.preventDefault();
        navigate(event.detail.href);
      }}
    />
  );
}
