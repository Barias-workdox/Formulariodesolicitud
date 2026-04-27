import { Button } from '../../button';
import { StatefulInformationPopover } from '../stateful-information-popover';

import type { StatefulInformationPopoverProps } from '../stateful-information-popover';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Surfaces/InformationPopover/StatefulInformationPopover',
  component: StatefulInformationPopover,
  args: {
    'data-testid': 'information-popover',
    placement: 'top',
    title: 'Irure ea do aliquip laboris.',
    content: `Velit do sint irure eu velit culpa sint sunt pariatur ullamco duis in reprehenderit. `,
  },
} as Meta<typeof StatefulInformationPopover>;

const Template: StoryFn<typeof StatefulInformationPopover> = (props) => {
  return (
    <StatefulInformationPopover {...props}>
      <Button>Click</Button>
    </StatefulInformationPopover>
  );
};

export const Default = Template.bind({});

export const WithOverrides: StoryObj<StatefulInformationPopoverProps> = Template.bind({});

WithOverrides.args = {
  overrides: {
    PopoverContent: {
      props: {
        overrides: {
          Header: {
            props: {
              overrides: {
                Root: {
                  style: ({ $theme }) => ({
                    backgroundColor: $theme.colors.brandDepressed,
                  }),
                },
                CloseButton: {
                  props: {
                    overrides: {
                      BaseButton: {
                        style: ({ $theme }) => ({
                          backgroundColor: $theme.colors.powerSubtle,
                        }),
                      },
                    },
                  },
                },
              },
            },
          },
          Content: {
            component: ({ children, ...rest }) => <div {...rest}>{children}</div>,
          },
        },
      },
    },
  },
};
