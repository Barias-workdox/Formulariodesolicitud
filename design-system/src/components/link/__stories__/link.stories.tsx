import { Link } from '../link';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Navigation/Link',
  component: Link,
  args: {
    children: 'Nulla id anim ipsum sint amet minim aliqua cillum dolore.',
    href: 'https://webdoxclm.com',
    onClick: () => console.log('clicked!'),
    underlined: true,
    disabled: false,
    kind: 'default',
    size: 'medium',
  },
  argTypes: {
    kind: {
      control: 'select',
      options: ['default', 'contrast'],
      description: 'Defines the color variant that contrasts with background',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the link and prevents interaction',
    },
    underlined: {
      control: 'boolean',
      description: 'Show underline decoration',
    },
    size: {
      control: 'select',
      options: ['medium', 'small'],
      description: 'Typography size for the link text',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=851-0&mode=dev',
    },
  },
} as Meta<typeof Link>;

/** All states demonstration */
export const Default: StoryFn<typeof Link> = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '18px' }}>Default Kind</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <strong>Normal:</strong> <Link href="https://google.com">Default link</Link>
          </div>
          <div>
            <strong>Hover:</strong> <Link href="https://youtube.com">Hover over this link</Link>
          </div>
          <div>
            <strong>Active:</strong>{' '}
            <Link href="https://telegram.com">Click and hold this link</Link>
          </div>
          <div>
            <strong>Visited:</strong>{' '}
            <Link href="https://discord.com">This link changes color when visited</Link>
          </div>
          <div>
            <strong>Disabled:</strong>{' '}
            <Link
              href="https://webdoxclm.com"
              disabled
            >
              Cannot be clicked
            </Link>
          </div>
        </div>
      </div>

      <div style={{ padding: '16px', backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'white' }}>Contrast Kind</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <strong style={{ color: 'white' }}>Normal:</strong>{' '}
            <Link
              href="https://google.com"
              kind="contrast"
            >
              Contrast link
            </Link>
          </div>
          <div>
            <strong style={{ color: 'white' }}>Hover:</strong>{' '}
            <Link
              href="https://youtube.com"
              kind="contrast"
            >
              Hover over this link
            </Link>
          </div>
          <div>
            <strong style={{ color: 'white' }}>Active:</strong>{' '}
            <Link
              href="https://webdoxclm.com"
              kind="contrast"
            >
              Click and hold this link
            </Link>
          </div>
          <div>
            <strong style={{ color: 'white' }}>Visited:</strong>{' '}
            <Link
              href="https://webdoxclm.com"
              kind="contrast"
            >
              This link changes color when visited
            </Link>
          </div>
          <div>
            <strong style={{ color: 'white' }}>Disabled:</strong>{' '}
            <Link
              href="https://facebook.com"
              kind="contrast"
              disabled
            >
              Cannot be clicked
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '18px' }}>Typography Sizes</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <strong>Medium size:</strong>{' '}
            <Link
              href="https://whatsapp.com"
              size="medium"
            >
              Standard medium text link
            </Link>
          </div>
          <div>
            <strong>Small size:</strong>{' '}
            <Link
              href="https://instagram.com"
              size="small"
            >
              Small text link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
