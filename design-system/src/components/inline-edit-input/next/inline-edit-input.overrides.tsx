import { StyledRoot } from '@components/input/next/input.overrides';

import type { InputOverrides } from 'baseui/input';

export type OverridesParams = {
  rootRef?: React.Ref<HTMLDivElement>;
};

/**
 * InlineEditInput overrides for the baseui Input component.
 */
export const getOverrides = ({ rootRef }: OverridesParams): InputOverrides => ({
  Root: {
    style: {
      paddingRight: 0,
    },
    props: {
      ref: rootRef,
    },
    component: (props) => (
      <StyledRoot
        ref={rootRef}
        {...props}
      />
    ),
  },
});
