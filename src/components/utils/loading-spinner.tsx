import { Spinner } from '@cloudscape-design/components';

export const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner size={'large'} />
    </div>
  );
};
