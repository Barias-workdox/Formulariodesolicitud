import { Drawer, DrawerBody } from '@components/drawer';

import { BusinessSummary } from '../business-summary';

import { summaryDrawerOverrides } from './business-summary-mobile.style';

import type { BusinessSummaryControllerProps } from '@components/webdox-ai/controllers/business-summary-controller';

type BusinessSummaryMobileProps = BusinessSummaryControllerProps;

/**
 * Business Summary Mobile component that displays a summary of business information
 */
export const BusinessSummaryMobile = ({
  isOpen,
  summary,
  toggleOpen,
}: BusinessSummaryMobileProps): JSX.Element => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={toggleOpen}
      anchor="bottom"
      size="80vh"
      overrides={summaryDrawerOverrides}
    >
      <DrawerBody padding="0">
        <BusinessSummary
          summary={summary}
          toggleOpen={toggleOpen}
        />
      </DrawerBody>
    </Drawer>
  );
};
