import { formatDateAsText } from '@components/utils/strings/date.utils';
import { TEST_DEFAULT_LOCALE, render, renderUseTranslation, screen } from '@test/test-utils';

import { mockNegotiableDocuments } from '../../../__mocks__/documents.mock';

import { BannerDocument } from './banner-document';

import type { BannerDocumentProps } from './banner-document';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const [{ approvedAt }] = mockNegotiableDocuments;

const defaultProps: BannerDocumentProps = {
  status: 'approved',
  approvedAt,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<BannerDocumentProps>): RenderType =>
  render(
    <BannerDocument
      {...defaultProps}
      {...props}
    />,
  );

describe('BannerDocument - tests', () => {
  it('should render the component with status `approved`', () => {
    renderComponent();

    expect(
      screen.getByText(
        t('contractNegotiationCollaboration.bannerDocument.approved', {
          date: formatDateAsText(approvedAt, TEST_DEFAULT_LOCALE, true),
        }),
      ),
    ).toBeInTheDocument();
  });

  it('should render the component with status `pending`', () => {
    renderComponent({ status: 'pending' });

    expect(
      screen.getByText(t('contractNegotiationCollaboration.bannerDocument.pending')),
    ).toBeInTheDocument();
  });
});
