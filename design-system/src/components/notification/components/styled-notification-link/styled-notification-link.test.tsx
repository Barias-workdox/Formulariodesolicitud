import { render, screen } from '@test/test-utils';

import { StyledNotificationLink } from './styled-notification-link';

import type { StyledNotificationLinkProps } from './styled-notification-link';
import type { RenderType } from '@test/test-utils';

const defaultProps: StyledNotificationLinkProps = {
  linkText: 'Example Link',
  linkPath: '/someRoute',
  linkType: 'external',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: StyledNotificationLinkProps): RenderType => {
  return render(
    <StyledNotificationLink
      {...defaultProps}
      {...props}
    />,
  );
};

describe('StyledNotificationLink', () => {
  it('should render the external redirect', () => {
    renderComponent();

    expect(screen.getByText(defaultProps.linkText)).toHaveAttribute('target');
  });

  it('should render the internal redirect', () => {
    const linkOptions: StyledNotificationLinkProps = {
      ...defaultProps,
      linkType: 'internal',
    };

    renderComponent({ ...linkOptions });

    expect(screen.getByText(linkOptions.linkText)).not.toHaveAttribute('target');
  });
});
