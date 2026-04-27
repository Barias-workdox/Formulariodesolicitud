import { userEvent } from '@testing-library/user-event';

import { render, screen, waitFor } from '@test/test-utils';

import { FormControlLabel } from './form-control-label';

import type { FormControlLabelProps } from './form-control-label';
import type { RenderType } from '@test/test-utils';

const defaultProps: FormControlLabelProps = {
  label: 'Username',
};

const tooltipText = 'Enter your username';
const maxLength = 10;
const currentCharactersQuantity = 6;

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<FormControlLabelProps>): RenderType =>
  render(
    <FormControlLabel
      {...defaultProps}
      {...props}
    />,
  );

describe('FormControlLabel - test', () => {
  it('should render label text and should not render character count by default', () => {
    renderComponent();

    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.queryByText(/\/\d+/)).not.toBeInTheDocument();
  });

  it('should render character count when maxLength and currentCharacters are supplied', () => {
    renderComponent({ maxLength, currentCharactersQuantity, showCharacterCounter: true });

    expect(screen.getByText(`${currentCharactersQuantity} / ${maxLength}`)).toBeInTheDocument();
  });

  it('should show tooltip content as string when infoTooltip is a string', async () => {
    renderComponent({ infoTooltip: tooltipText });

    await userEvent.hover(screen.getByTitle('Info'));
    await waitFor(() => expect(screen.getByText(tooltipText)).toBeInTheDocument());
  });

  it('should show tooltip content as JSX when infoTooltip is a JSX element', async () => {
    const tooltipContent = <div>{tooltipText}</div>;

    renderComponent({ infoTooltip: tooltipContent });

    await userEvent.hover(screen.getByTitle('Info'));
    await waitFor(() => expect(screen.getByText(tooltipText)).toBeInTheDocument());
  });
});
