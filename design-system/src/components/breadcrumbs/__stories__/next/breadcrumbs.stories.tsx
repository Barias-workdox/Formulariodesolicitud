import { useState } from 'react';

import { Button } from '@components/button';
import { Text } from '@components/text';

import { Breadcrumbs } from '../../next/breadcrumbs';

import type { BreadcrumbsProps } from '../../next/breadcrumbs';
import type { Meta, StoryFn } from '@storybook/react-vite';

const defaultBreadcrumbs = [
  { label: 'First Level' },
  { label: 'Second Level' },
  { label: 'Third Level' },
  { label: 'Fourth Level' },
  { label: 'Fifth Level' },
];

export default {
  title: 'Components/Navigation/Breadcrumbs/Next',
  component: Breadcrumbs,
  args: {
    showTrailingSeparator: false,
  },
} as Meta<typeof Breadcrumbs>;

/** A Breadcrumbs */
const InteractiveTemplate: StoryFn<BreadcrumbsProps> = (args) => {
  const [breadcrumbs, setBreadcrumbs] = useState(defaultBreadcrumbs);

  const handleBreadcrumbClick = (index: number) => {
    setBreadcrumbs(breadcrumbs.slice(0, index + 1));
  };

  return (
    <div style={{ height: '400px' }}>
      <Breadcrumbs {...args}>
        {breadcrumbs.map((breadcrumb, index) => (
          <Breadcrumbs.Item
            key={index}
            label={breadcrumb.label}
            onClick={() => handleBreadcrumbClick(index)}
          >
            {breadcrumb.label}
          </Breadcrumbs.Item>
        ))}
      </Breadcrumbs>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          gap: '10px',
        }}
      >
        <Text
          variant="body"
          margin={0}
          marginTop="medium"
          fontWeight="500"
        >
          Currently on: {breadcrumbs[breadcrumbs.length - 1].label}
        </Text>
        {breadcrumbs.length < defaultBreadcrumbs.length && (
          <Button onClick={() => setBreadcrumbs(defaultBreadcrumbs)}>Reset</Button>
        )}
      </div>
    </div>
  );
};

export const Default = InteractiveTemplate.bind({});

export const NoBreadcrumbs: StoryFn<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const SingleBreadcrumb: StoryFn<BreadcrumbsProps> = (args) => (
  <Breadcrumbs {...args}>
    <Breadcrumbs.Item label="First Level">First Level</Breadcrumbs.Item>
  </Breadcrumbs>
);

export const WithCustomComponents: StoryFn<BreadcrumbsProps> = (args) => (
  <Breadcrumbs
    {...args}
    overrides={{ Root: { style: { backgroundColor: 'lightblue' } } }}
  >
    <Breadcrumbs.Item label="First Level">First Level</Breadcrumbs.Item>
    <Breadcrumbs.Item label="Second Level">Second Level</Breadcrumbs.Item>
    <Breadcrumbs.Item label="Third Level">
      <Button>Third Level</Button>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item label="Fourth Level">Fourth Level</Breadcrumbs.Item>
  </Breadcrumbs>
);
