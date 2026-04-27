import type { ReactElement } from 'react';

import { Tab, Tabs } from '@components/tabs';
import { Tag } from '@components/tag/next/tag';
import { useTranslation } from '@components/utils';
import { formatCompactNumber } from '@components/utils/strings/text.utils';

import { StyledTabLabel } from './file-upload-manager-tabs.styles';

import type { FileUploadManagerTabType } from '@components/file-upload-manager/contexts/file-uploader-manager.context';
import type { TabsCustomProps, TabsProps } from '@components/tabs';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export interface TabLabelProps {
  label: FileUploadManagerTabType;
  counter: number;
}

export interface FileUploadManagerTabsProps {
  dataTestId?: string;
  tabs: TabLabelProps[];
  activeTab: string;
  onChange: TabsProps['onChange'];
}

/** gets the overrides for the tabs used in file upload manager */
export const getTabsOverrides = (): TabsCustomProps['overrides'] => ({
  TabList: {
    style: {
      padding: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  Tab: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      ...$theme.typography.ParagraphSmall,
      padding: `${$theme.spacing.spacingSm} ${$theme.spacing.spacingXs}`,
    }),
  },
});

/**
 * Display the label for the tab, including the count of files in that tab.
 */
const TabLabel = ({ label, counter }: TabLabelProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <StyledTabLabel>
      <span>{t(`fileUploadManager.${label}`)}</span>
      <Tag
        kind="neutral"
        variant="outlined"
        shape="rounded"
        size="sm"
      >
        {formatCompactNumber(counter)}
      </Tag>
    </StyledTabLabel>
  );
};

/**
 * Display the tabs for the file upload manager.
 */
export const FileUploadManagerTabs = ({
  dataTestId = 'file-upload-manager__tabs',
  activeTab,
  tabs,
  onChange,
}: FileUploadManagerTabsProps): JSX.Element => {
  const tabsOverrides = getTabsOverrides();

  return (
    <Tabs
      data-testid={dataTestId}
      activeKey={activeTab}
      onChange={onChange}
      showPanels={false}
      overrides={tabsOverrides}
    >
      {tabs.map(({ counter, label }) => (
        <Tab
          key={label}
          data-testid={`${dataTestId}__tab--${label}`}
          title={
            <TabLabel
              label={label}
              counter={counter}
            />
          }
        />
      ))}
    </Tabs>
  );
};
