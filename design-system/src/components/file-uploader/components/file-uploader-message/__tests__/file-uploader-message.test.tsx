import { render, screen } from '@test/test-utils';

import { FileUploaderMessage } from '../file-uploader-message';

import type { FileUploaderMessageProps } from '../file-uploader-message';
import type { RenderType } from '@test/test-utils';

const title = 'Title text';
const subtitle = 'subtitle text';

const defaultProps: FileUploaderMessageProps = {
  title,
  subtitle,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<FileUploaderMessageProps>): RenderType =>
  render(
    <FileUploaderMessage
      {...defaultProps}
      {...props}
    />,
  );

describe('file-uploader: file-uploader-message tests', () => {
  it('should render the component successfully', () => {
    renderComponent();

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });

  it('should render the component without a subtitle', () => {
    renderComponent({ subtitle: undefined });

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.queryByText(subtitle)).not.toBeInTheDocument();
  });
});
