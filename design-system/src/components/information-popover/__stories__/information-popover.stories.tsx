import { useState } from 'react';

import { Button } from '../../button';
import { InformationPopover } from '../information-popover';

import type { InformationPopoverProps } from '../information-popover';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Surfaces/InformationPopover/InformationPopover',
  component: InformationPopover,
  args: {
    'data-testid': 'information-popover',
    placement: 'top',
    title: 'Irure ea do aliquip laboris.',
    content: `Velit do sint irure eu velit culpa sint sunt pariatur ullamco duis in reprehenderit. `,
  },
} as Meta<typeof InformationPopover>;

const Template: StoryFn<typeof InformationPopover> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  /** Function to handle open event. */
  const handleOpen = () => setIsOpen(true);

  /** Function to handle close event. */
  const handleClose = () => setIsOpen(false);

  return (
    <InformationPopover
      {...props}
      isOpen={isOpen}
      close={handleClose}
      onClick={handleOpen}
      onClickOutside={handleClose}
      onEsc={handleClose}
    >
      <Button>Click</Button>
    </InformationPopover>
  );
};

export const Default = Template.bind({});

export const WithOverrides: StoryObj<InformationPopoverProps> = Template.bind({});

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
