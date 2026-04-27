import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { UploadAction } from './upload-action';

import type { UploadActionProps } from './upload-action';
import type { RenderType } from '@test/test-utils';

const mockFiles = [
  new File(['hello'], 'hello.png', { type: 'image/png', lastModified: 123 }),
  new File(['hello'], 'hello.png', { type: 'image/png' }),
  new File(['hello'], 'hello.pdf', { type: 'application/pdf' }),
];
const mockOnSelect = testHelpers.fn();

const defaultProps = {
  onSelect: mockOnSelect,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<UploadActionProps>): RenderType =>
  render(
    <UploadAction
      {...defaultProps}
      {...props}
    >
      <span>action</span>
    </UploadAction>,
  );

describe('UploadAction - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the input and the children', () => {
    renderComponent();

    const input = screen.getByPlaceholderText('file-input-label');
    const children = screen.getByText('action');

    expect(input).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });

  it('should call `onSelect` with correct data when `multiple` is false', async () => {
    renderComponent({ multiple: false });

    const input = screen.getByPlaceholderText('file-input-label') as HTMLInputElement;
    const children = screen.getByText('action');

    await userEvent.click(children);
    await userEvent.upload(input, mockFiles);

    expect(input.files.length).toEqual(1);
    expect(input.files[0]).toStrictEqual(mockFiles[0]);
    expect(mockOnSelect).toHaveBeenCalledWith([mockFiles[0]], []);
  });

  it('should call `onSelect` with correct data when `multiple` is true', async () => {
    renderComponent({ accept: ['image/png'], multiple: true });

    const input = screen.getByPlaceholderText('file-input-label') as HTMLInputElement;
    const children = screen.getByText('action');

    await userEvent.click(children);
    await userEvent.upload(input, mockFiles);

    expect(input.files).toHaveLength(2);
    expect(input.files[0]).toStrictEqual(mockFiles[0]);
    expect(input.files[1]).toStrictEqual(mockFiles[1]);
    expect(mockOnSelect).toHaveBeenCalledWith([mockFiles[0], mockFiles[1]], []);
  });
});
