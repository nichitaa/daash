import { ClientColumnDefinition } from '../../types';
import type { CollectionPreferencesProps } from '@cloudscape-design/components';

export const getCollectionPreferencesProps = (
  clientDefinitions: ClientColumnDefinition[],
): Partial<CollectionPreferencesProps> => {
  return {
    pageSizePreference: {
      title: 'Select page size',
      options: [
        { value: 10, label: '10 resources' },
        { value: 20, label: '20 resources' },
        { value: 50, label: '50 resources' },
      ],
    },
    contentDisplayPreference: {
      title: 'Column preferences',
      description: 'Customize the columns visibility and order.',
      options: clientDefinitions.map(({ id, header, alwaysVisible }) => ({
        id: id,
        label: header,
        alwaysVisible: alwaysVisible,
      })),
    },
    stickyColumnsPreference: {
      firstColumns: {
        title: 'Stick first column(s)',
        description:
          'Keep the first column(s) visible while horizontally scrolling the table content.',
        options: [
          { label: 'None', value: 0 },
          { label: 'First column', value: 1 },
          { label: 'First two columns', value: 2 },
        ],
      },
      lastColumns: {
        title: 'Stick last column',
        description: 'Keep the last column visible while horizontally scrolling the table content.',
        options: [
          { label: 'None', value: 0 },
          { label: 'Last column', value: 1 },
        ],
      },
    },
    wrapLinesPreference: {},
    contentDensityPreference: {},
    stripedRowsPreference: {},
  };
};
