import { FooterButton } from './components/footer-button';
import { FooterComponent } from './footer';
import { FooterProvider } from './footer.provider';

import type { FooterProps } from './footer.interfaces';

/**
 * Footer Container component that wraps Footer with its Provider.
 */
const FooterContainer = (props: FooterProps): JSX.Element => {
  return (
    <FooterProvider defaultProps={props}>
      <FooterComponent {...props} />
    </FooterProvider>
  );
};

FooterContainer.Button = FooterButton;

export const Footer = FooterContainer;
