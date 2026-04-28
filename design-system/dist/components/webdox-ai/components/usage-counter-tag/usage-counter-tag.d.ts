import { TagProps } from '../../../tag/next/tag.interfaces';
import { WebdoxAIUsageStatus } from '../../interfaces/webdox-ia-plans.interfaces';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export type UsageCounterTagProps = {
    /** current status of the plan */
    usageStatus?: WebdoxAIUsageStatus;
    /** The icon to display. */
    icon: TagProps['icon'];
    /** The number of requests remaining. */
    remainingRequests: number;
    /** The total number of requests available. */
    totalRequests: number;
};
/**
 * A tag component that displays the usage counter of the WebdoxAI.
 */
export declare const UsageCounterTag: ({ dataTestId, icon, usageStatus, remainingRequests, totalRequests, }: WithTestId<UsageCounterTagProps>) => JSX.Element;
