import { render, screen } from '@test/test-utils';

import { FormControl } from './form-control';

import type { FormControlProps } from './form-control';
import type { RenderType } from '@test/test-utils';

const defaultProps: FormControlProps = {
  label: 'Label test',
  caption: 'Caption test',
  children: <p>Children test</p>,
};

const maxLength = 10;
const currentCharactersQuantity = 6;

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<FormControlProps>): RenderType =>
  render(
    <FormControl
      {...defaultProps}
      {...props}
    />,
  );

describe('FormControl - test', () => {
  it('should render label and caption elements', () => {
    renderComponent();

    expect(screen.getByText(defaultProps.label as string)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.caption as string)).toBeInTheDocument();
  });

  it('should render custom label component if passed as JSX object', () => {
    const customLabel = <div>Custom Label</div>;

    renderComponent({ label: customLabel });

    expect(screen.getByText('Custom Label')).toBeInTheDocument();
    expect(screen.queryByTitle('Info')).not.toBeInTheDocument();
  });

  it('should render character count on label when showCharacterCounter is true', () => {
    renderComponent({ showCharacterCounter: true, currentCharactersQuantity, maxLength });

    expect(screen.getByText(`${currentCharactersQuantity} / ${maxLength}`)).toBeInTheDocument();
  });
});
