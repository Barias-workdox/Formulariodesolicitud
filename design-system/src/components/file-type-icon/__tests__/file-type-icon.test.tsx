import { render, screen } from '@test/test-utils';

import { FileTypeIcon } from '../file-type-icon';
import { FILE_ICON_CONFIG } from '../file-type-icon.constants';

import type { FileTypeIconProps } from '../file-type-icon';
import type { FileType } from '../file-type-icon.interfaces';

const defaultProps: FileTypeIconProps = {
  'data-testid': 'file-type-icon',
  fileExtension: 'docx',
};

const renderComponent = (props?: Partial<FileTypeIconProps>) => {
  return render(
    <FileTypeIcon
      {...defaultProps}
      {...props}
    />,
  );
};

describe('FileTypeIcon', () => {
  it('should renders component correctly', () => {
    const { text: iconText } = FILE_ICON_CONFIG[defaultProps.fileExtension];

    renderComponent();

    const iconElement = screen.getByTestId(defaultProps['data-testid']);

    expect(iconElement).toHaveTextContent(iconText);
  });

  it('should renders component correctly with an unknown file extension', () => {
    // Type casting is necessary here to avoid type errors.
    const unknownFileExtension = 'test' as FileType;

    renderComponent({ fileExtension: unknownFileExtension });

    expect(screen.getByTestId(`${defaultProps['data-testid']}--unknown`)).toBeInTheDocument();
  });
});
