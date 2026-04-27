import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen } from '@test/test-utils';

import { FileUploadManagerTabs } from '../components/file-upload-manager-tabs/file-upload-manager-tabs';
import { TABS } from '../file-upload-manager.constants';

import type { FileUploadManagerTabsProps } from '../components/file-upload-manager-tabs/file-upload-manager-tabs';

const mockOnChange = vi.fn();

const defaultProps: Omit<FileUploadManagerTabsProps, 'children'> = {
  activeTab: 'all',
  tabs: TABS.map((tabKey) => ({ label: tabKey, counter: 20 })),
  onChange: mockOnChange,
};

const renderComponent = (props: Partial<FileUploadManagerTabsProps> = {}) => {
  return render(
    <FileUploadManagerTabs
      {...defaultProps}
      {...props}
    />,
  );
};

describe('FileUploadManagerTabs', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all tabs correctly', () => {
    renderComponent();
    TABS.forEach((tab) => {
      expect(screen.getByText(t(`fileUploadManager.${tab}`))).toBeInTheDocument();
    });
  });

  it('highlights the active tab', () => {
    renderComponent({ activeTab: 'completed' });

    const completedTab = screen.getByText(t('fileUploadManager.completed'));
    const completedTabButton = completedTab.closest('button');

    expect(completedTabButton).toHaveAttribute('aria-selected', 'true');
  });

  it('calls onChange when a tab is clicked', async () => {
    renderComponent();

    const completedTab = screen.getByText(t('fileUploadManager.completed'));

    await userEvent.click(completedTab);

    expect(mockOnChange).toHaveBeenCalledWith(expect.objectContaining({ activeKey: 'completed' }));
  });
});
