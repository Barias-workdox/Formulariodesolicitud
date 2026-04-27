import { formatDateAsText } from '@components/utils/strings/date.utils';
import { TEST_DEFAULT_LOCALE, render, renderUseTranslation, screen } from '@test/test-utils';

import { BannerCollaboration } from './banner-collaboration';

import type { BannerCollaborationProps } from './banner-collaboration';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const mockDate = '2023-08-29T12:55:03-04:00';

const defaultProps: BannerCollaborationProps = {
  status: 'canceled',
  cancelledAt: mockDate,
  finishedAt: mockDate,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<BannerCollaborationProps>): RenderType =>
  render(
    <BannerCollaboration
      {...defaultProps}
      {...props}
    />,
  );

describe('BannerCollaboration - tests', () => {
  it('should render the component with status `canceled`', () => {
    renderComponent();

    expect(
      screen.getByText(
        t('contractNegotiationCollaboration.bannerCollaboration.canceled', {
          date: formatDateAsText(mockDate, TEST_DEFAULT_LOCALE, true),
        }),
      ),
    ).toBeInTheDocument();
  });

  it('should render the component with status `finished`', () => {
    renderComponent({ status: 'finished' });

    expect(
      screen.getByText(
        t('contractNegotiationCollaboration.bannerCollaboration.finished', {
          date: formatDateAsText(mockDate, TEST_DEFAULT_LOCALE, true),
        }),
      ),
    ).toBeInTheDocument();
  });
});
