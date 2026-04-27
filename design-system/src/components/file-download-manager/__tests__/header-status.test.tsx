import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { HeaderStatus } from '../components/header-status';

import type { HeaderStatusProps } from '../components/header-status';

const { t } = renderUseTranslation();

const defaultProps: HeaderStatusProps = {
  status: 'downloading',
  documentCount: 3,
};

const renderComponent = (props: Partial<HeaderStatusProps> = {}) => {
  return render(
    <HeaderStatus
      {...defaultProps}
      {...props}
    />,
  );
};

describe('HeaderStatus', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });
  it('renders nothing for idle status', () => {
    renderComponent({ status: 'idle' });

    expect(screen.queryByTestId('file-download-manager--header-status')).not.toBeInTheDocument();
  });
  it('renders the header status with downloading status', () => {
    renderComponent();

    expect(screen.getByTestId('file-download-manager--header-status')).toBeInTheDocument();
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(
      screen.getByText(t('fileDownloadManager.headerStatusLabels.downloading'), { exact: false }),
    ).toBeInTheDocument();
    expect(screen.getByText(`${defaultProps.documentCount}`, { exact: false })).toBeInTheDocument();
  });
  it('renders the header status with finished status', () => {
    renderComponent({ status: 'finished' });

    expect(
      screen.getByTestId('file-download-manager--header-status--finished-icon--wrapper'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('fileDownloadManager.headerStatusLabels.finished')),
    ).toBeInTheDocument();
  });
  it('renders the header status with error status', () => {
    renderComponent({ status: 'error' });

    expect(
      screen.getByTestId('file-download-manager--header-status--error-icon--wrapper'),
    ).toBeInTheDocument();
    expect(screen.getByText(t('fileDownloadManager.headerStatusLabels.error'))).toBeInTheDocument();
  });
});
