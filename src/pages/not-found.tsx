import { AppNavigation } from '../components';
import { AppLayout } from '@cloudscape-design/components';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <AppLayout
      contentType={'dashboard'}
      content={
        <Box textAlign={'center'} margin={'l'}>
          <SpaceBetween size={'s'}>
            <Box variant={'h2'}>Page Not Found</Box>
            <Button
              href={'/'}
              onFollow={(e) => {
                e.preventDefault();
                navigate('/');
              }}
            >
              Home Page
            </Button>
          </SpaceBetween>
        </Box>
      }
      navigation={<AppNavigation />}
    />
  );
};
