import { BreadcrumbGroup } from '@cloudscape-design/components';
import { useNavigate } from 'react-router-dom';

export function AppBreadcrumb() {
  const navigate = useNavigate();

  return (
    <BreadcrumbGroup
      items={[{ text: 'Dashboard', href: '/status' }]}
      onFollow={(event) => {
        event.preventDefault();
        navigate(event.detail.href);
      }}
    />
  );
}
