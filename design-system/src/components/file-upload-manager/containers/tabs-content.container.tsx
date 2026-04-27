import { type ReactElement, useCallback, useMemo } from 'react';

import { FileUploadManagerTabs } from '@components/file-upload-manager/components/file-upload-manager-tabs';

import { FileUploadManagerList } from '../components/file-upload-manager-list';
import { TABS } from '../file-upload-manager.constants';
import { useFileUploadManagerContext } from '../hooks/use-file-uploader-manager-context';

import type { FileUploadManagerTabType } from '../contexts/file-uploader-manager.context';
import type { TabLabelProps } from '@components/file-upload-manager/components/file-upload-manager-tabs';
import type { WithTestId } from '@interfaces/common.interfaces';

type TabsContentContainerProps = WithTestId & {};

/**
 * Container for the tabs content of the file upload manager.
 */
export const TabsContentContainer = ({ dataTestId }: TabsContentContainerProps): ReactElement => {
  const { activeTab, setActiveTab, files = [], hiddenTabs, status } = useFileUploadManagerContext();

  /** It filters the files based on the active tab */
  const filteredFiles = useMemo(() => {
    if (activeTab === 'all') return files;

    return files.filter(({ status }) => status === activeTab);
  }, [files, activeTab]);

  /** It gets the props for each tab, including the label and the counter */
  const getTabProps = useCallback(
    (tabKey: FileUploadManagerTabType) => ({
      label: tabKey,
      counter:
        tabKey === 'all' ? files.length : files.filter(({ status }) => status === tabKey).length,
    }),
    [files],
  );

  /** It filters the tabs that will be displayed and updates the counter for each tab */
  const tabs = useMemo(
    () =>
      TABS.reduce<TabLabelProps[]>(
        (acc, tabKey, i) =>
          hiddenTabs.includes(tabKey) ? acc.toSpliced(i, 1) : acc.concat(getTabProps(tabKey)),
        [],
      ),
    [hiddenTabs, getTabProps],
  );

  const handleTabChange = useCallback(
    ({ activeKey }: { activeKey: FileUploadManagerTabType }) => {
      setActiveTab(activeKey);
    },
    [setActiveTab],
  );

  return (
    <>
      <FileUploadManagerTabs
        dataTestId={`${dataTestId}__tabs`}
        tabs={tabs}
        activeTab={activeTab}
        onChange={handleTabChange}
      />
      <FileUploadManagerList
        dataTestId={`${dataTestId}__list`}
        files={filteredFiles}
        activeTab={activeTab}
        status={status}
      />
    </>
  );
};
