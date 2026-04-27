import { useToaster } from '../../../../.storybook/preview';
import { Button } from '../../button';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Progress & Validation/Toaster',
  component: Button,
  parameters: {
    controls: { disable: true },
  },

  args: {
    kind: 'primary',
    size: 'default',
    children: 'Show Toast',
  },
} as Meta<typeof Button>;

/** A Toaster without title - body only */
const TemplateWithoutTitle: StoryFn<typeof Button> = (args) => {
  const toaster = useToaster();

  return (
    <Button
      {...args}
      onClick={(): void => {
        toaster.positive({
          body: 'This toast only has a body message, no title.',
          duration: 0,
          closeable: true,
          placement: 'bottomRight',
        });
      }}
    >
      Show Without Title Toast
    </Button>
  );
};

/** A Toaster without body - title only */
const TemplateWithoutBody: StoryFn<typeof Button> = (args) => {
  const toaster = useToaster();

  return (
    <Button
      {...args}
      onClick={(): void => {
        toaster.positive({
          title: 'This toast only has a title, no body message.',
          duration: 0,
          closeable: true,
          placement: 'bottomRight',
        });
      }}
    >
      Show Without Body Toast
    </Button>
  );
};

/** A Toaster demonstrating auto-hide functionality */
const TemplateAutoHideDemo: StoryFn<typeof Button> = (args) => {
  const toaster = useToaster();

  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <Button
        {...args}
        onClick={(): void => {
          toaster.positive({
            title: 'Quick Toast',
            body: 'This toast disappears in 2 seconds',
            duration: 2000,
            closeable: true,
            placement: 'bottomRight',
          });
        }}
      >
        2 Second Toast
      </Button>
      <Button
        {...args}
        onClick={(): void => {
          toaster.info({
            title: 'Long Toast',
            body: 'This toast stays for 10 seconds',
            duration: 10000,
            closeable: true,
            placement: 'bottomRight',
          });
        }}
      >
        10 Second Toast
      </Button>
      <Button
        {...args}
        onClick={(): void => {
          toaster.info({
            title: 'Default Duration Toast',
            body: 'This toast uses the default auto-hide duration (5 seconds).',
            placement: 'bottomRight',
          });
        }}
      >
        Default Toast (5s)
      </Button>
      <Button
        {...args}
        onClick={(): void => {
          toaster.info({
            title: 'Persistent Toast',
            body: 'This toast does not auto-hide, only manual close',
            duration: 0,
            closeable: true,
            placement: 'bottomRight',
          });
        }}
      >
        No Auto-Hide
      </Button>
    </div>
  );
};

/** A Toaster demonstrating closeable functionality */
const TemplateCloseableDemo: StoryFn<typeof Button> = (args) => {
  const toaster = useToaster();

  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <Button
        {...args}
        onClick={(): void => {
          toaster.positive({
            title: 'Closable Toast',
            body: 'This toast has a close button (closeable: true)',
            duration: 8000,
            closeable: true,
            placement: 'bottomRight',
          });
        }}
      >
        With Close Button
      </Button>
      <Button
        {...args}
        onClick={(): void => {
          toaster.negative({
            title: 'Non-Closable Toast',
            body: 'This toast has no close button (closeable: false)',
            duration: 5000,
            closeable: false,
            placement: 'bottomRight',
          });
        }}
      >
        No Close Button
      </Button>
      <Button
        {...args}
        onClick={(): void => {
          toaster.info({
            title: 'Default Closable',
            body: 'This toast uses default closeable behavior (true)',
            duration: 4000,
            // closeable not specified - defaults to true
            placement: 'bottomRight',
          });
        }}
      >
        Default Closeable
      </Button>
    </div>
  );
};

/** A Toaster demonstrating different placements */
const TemplatePlacementDemo: StoryFn<typeof Button> = (args) => {
  const toaster = useToaster();

  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <Button
        {...args}
        onClick={(): void => {
          toaster.info({
            title: 'Top Left',
            body: 'This toast is placed at the top-left corner.',
            placement: 'topLeft',
          });
        }}
      >
        Top Left
      </Button>
      <Button
        {...args}
        onClick={(): void => {
          toaster.info({
            title: 'Top Center',
            body: 'This toast is placed at the top center.',
            placement: 'top',
          });
        }}
      >
        Top
      </Button>
      <Button
        {...args}
        onClick={(): void => {
          toaster.info({
            title: 'Top Right',
            body: 'This toast is placed at the top-right corner.',
            placement: 'topRight',
          });
        }}
      >
        Top Right
      </Button>
      <Button
        {...args}
        onClick={(): void => {
          toaster.info({
            title: 'Bottom Right',
            body: 'This toast is placed at the bottom-right corner.',
            placement: 'bottomRight',
          });
        }}
      >
        Bottom Right
      </Button>
      <Button
        {...args}
        onClick={(): void => {
          toaster.info({
            title: 'Bottom Center',
            body: 'This toast is placed at the bottom center.',
            placement: 'bottom',
          });
        }}
      >
        Bottom
      </Button>
      <Button
        {...args}
        onClick={(): void => {
          toaster.info({
            title: 'Bottom Left',
            body: 'This toast is placed at the bottom-left corner.',
            placement: 'bottomLeft',
          });
        }}
      >
        Bottom Left
      </Button>
    </div>
  );
};

/** A Toaster with optional link functionality */
const TemplateWithLink: StoryFn<typeof Button> = (args) => {
  const toaster = useToaster();

  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <Button
        {...args}
        onClick={(): void => {
          toaster.positive({
            title: 'Success with Link',
            body: 'Your document has been successfully uploaded.',
            link: { url: 'https://example.com/document', text: 'View Document' },
            duration: 6000,
            closeable: true,
            placement: 'bottomRight',
          });
        }}
      >
        Success with Link
      </Button>
      <Button
        {...args}
        onClick={(): void => {
          toaster.info({
            title: 'Information with Link',
            body: 'Learn more about our new features.',
            link: { url: 'https://example.com/features', text: 'Learn More' },
            duration: 8000,
            closeable: true,
            placement: 'bottomRight',
          });
        }}
      >
        Info with Link
      </Button>
      <Button
        {...args}
        onClick={(): void => {
          toaster.warning({
            title: 'Warning with Link',
            body: 'Your subscription will expire soon.',
            link: { url: 'https://example.com/renew', text: 'Renew Now' },
            duration: 10000,
            closeable: true,
            placement: 'bottomRight',
          });
        }}
      >
        Warning with Link
      </Button>
      <Button
        {...args}
        onClick={(): void => {
          toaster.negative({
            title: 'Error with Link',
            body: 'Something went wrong with your request.',
            link: { url: 'https://example.com/support', text: 'Get Help' },
            duration: 8000,
            closeable: true,
            placement: 'bottomRight',
          });
        }}
      >
        Error with Link
      </Button>
    </div>
  );
};

export const WithoutTitle = TemplateWithoutTitle.bind({});

export const WithoutBody = TemplateWithoutBody.bind({});

export const AutoHideDemo = TemplateAutoHideDemo.bind({});

export const CloseableDemo = TemplateCloseableDemo.bind({});

export const PlacementDemo = TemplatePlacementDemo.bind({});

export const WithLink = TemplateWithLink.bind({});
