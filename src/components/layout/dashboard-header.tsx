import Button from '@cloudscape-design/components/button';
import { splitPanelOpen$ } from '../../rx-state';
import Header from '@cloudscape-design/components/header';

export const DashboardHeader = () => {
  return (
    <Header
      variant={'h2'}
      actions={
        <>
          <Button
            variant={'primary'}
            iconName={'add-plus'}
            onClick={() => splitPanelOpen$.next(true)}
          >
            Add widget
          </Button>
        </>
      }
    >
      Dashboard
    </Header>
  );
};
