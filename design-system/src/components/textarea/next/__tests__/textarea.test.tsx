import type { ChangeEvent } from 'react';

import userEvent from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { Textarea } from '../textarea';

import type { TextareaProps } from '../textarea';

const mockPlaceholder = 'my-input';

describe('Textarea', () => {
  const defaultProps: TextareaProps = {
    'data-testid': 'textarea',
    kind: 'gray',
    size: 'default',
    placeholder: mockPlaceholder,
  };

  const renderComponent = (props?: Partial<TextareaProps>) =>
    render(
      <Textarea
        {...defaultProps}
        {...props}
      />,
    );

  it('should render correctly with default props', () => {
    const { getByTestId } = renderComponent();
    const textarea = getByTestId('textarea');

    expect(textarea).toBeInTheDocument();
  });

  it('should call the onChange handler with the correct value when text is entered', async () => {
    const mockOnChange = testHelpers.fn();

    renderComponent({
      onChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
        mockOnChange(e.target.value);
      },
    });

    screen.getByPlaceholderText(mockPlaceholder).focus();
    await userEvent.paste('test value');

    expect(mockOnChange).toHaveBeenCalledWith('test value');
  });
});
