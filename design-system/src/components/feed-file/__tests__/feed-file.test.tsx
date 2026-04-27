import { render } from '@test/test-utils';

import { FeedFile } from '../feed-file';

import type { FeedFileProps } from '../feed-file.interfaces';
import type { FileType } from '@components/file-type-icon';
import type { RenderType } from '@test/test-utils';

const mockDataTestId = 'data-testid';

const defaultProps = {
  'data-testid': mockDataTestId,
  document: { id: 1, name: 'Documento 1.docx', fileExt: 'docx' as FileType },
};

/** Utility to render component quickly with default props */
const renderComponent = (props?: Partial<FeedFileProps>): RenderType => {
  return render(
    <FeedFile
      {...defaultProps}
      {...props}
    />,
  );
};

describe('FeedFile', () => {
  it('should renders correctly', () => {
    const { getByText } = renderComponent();
    const { document } = defaultProps;

    expect(getByText(document.name)).toBeInTheDocument();
  });

  it('should render with the information tag', () => {
    const { getByTestId } = renderComponent({
      tagProps: {
        title: 'Archivo no soportado',
        content: 'El tipo de archivo no es soportado para la carga en workflow',
        kind: 'warning',
      },
    });

    expect(getByTestId(`${mockDataTestId}__info-tag`)).toBeInTheDocument();
  });
});
