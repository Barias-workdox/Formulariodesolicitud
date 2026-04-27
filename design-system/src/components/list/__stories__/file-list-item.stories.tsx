import { FileListItem } from '../components/file-list-item';

import type { FileListItemProps } from '../components/file-list-item';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Content/List/FileListItem',
  component: FileListItem,
  args: {
    label: 'Ea voluptate non nulla',
    details: 'Officia veniam voluptate',
    info: 'Info',
    endEnhancer: 'Info',
    fileExtension: 'folder',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-DS-1.1-(Oficial)?node-id=7666-13105&t=wJzOgGHeFMefqA2q-4',
    },
  },
} as Meta<typeof FileListItem>;

/** A FileListItem */
const Template: StoryFn<typeof FileListItem> = (args) => {
  return (
    <div style={{ width: '300px' }}>
      <FileListItem {...args} />
    </div>
  );
};

export const Default = Template.bind({});

export const AsButton: StoryObj<FileListItemProps> = Template.bind({});

AsButton.args = {
  onClick: () => alert(`FileListItem - clicked`),
};
