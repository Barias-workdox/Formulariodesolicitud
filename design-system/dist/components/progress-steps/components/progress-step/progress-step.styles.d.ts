import { ProgressStepKind, ProgressStepType } from './progress-step';
type StyledProgressStepProps = {
    $type: ProgressStepType;
    $isEnabledMouseEvents: boolean;
    $width: string;
};
export declare const StyledProgressStep: import('styletron-react').StyletronComponent<"div", StyledProgressStepProps>;
type StyledIconWrapperProps = {
    $kind: ProgressStepKind;
    $isHovered: boolean;
};
export declare const StyledIconWrapper: import('styletron-react').StyletronComponent<"div", StyledIconWrapperProps>;
export {};
