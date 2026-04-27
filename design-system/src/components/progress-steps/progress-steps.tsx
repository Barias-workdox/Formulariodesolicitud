import { Fragment } from 'react';
import type { ReactElement } from 'react';

import { useCss } from '@components/utils/hooks/use-css';

import { ProgressStep } from './components/progress-step';
import { styles } from './progress-steps.styles';

import type { ProgressStepProps } from './components/progress-step/progress-step';

export interface ProgressStepsProps extends Pick<
  ProgressStepProps,
  'size' | 'type' | 'hideText' | 'responsiveBreakpoint'
> {
  /**  The `ProgressStep` components that will be managed by `ProgressSteps`. */
  children: ReactElement<ProgressStepProps> | ReactElement<ProgressStepProps>[];
  'data-testid'?: string;
  /** Specifies a uniform width for all steps when `type` is 'default'. */
  stepWidth?: string;
  /**
   * Callback function triggered when any step is clicked.
   * Receives the index of the clicked step as an argument.
   */
  onStepClick?(index: number): void;
}

/**
 * `ProgressSteps` is a container component that manages a sequence of `ProgressStep` components, providing structure and layout.
 * It supports both compressed and default layouts, with optional click handling for each step.
 * Renders a react element representing a sequence of progress steps.
 *
 * @example
 * // Basic usage with two steps
 * <ProgressSteps>
 *   <ProgressStep title="Step 1" kind="default" />
 *   <ProgressStep title="Step 2" kind="checked" />
 * </ProgressSteps>
 */
export const ProgressSteps = ({
  'data-testid': dataTestId = 'design-system__progress-steps',
  size = 'sm',
  type = 'default',
  hideText = false,
  responsiveBreakpoint = 'medium',
  stepWidth,
  children,
  onStepClick,
}: ProgressStepsProps): ReactElement => {
  const { rootStyles, wrapperStepStyles, compressedDividerStyles, dividerStyles } = useCss(styles);
  const nodes = Array.isArray(children) ? children : [children];

  return (
    <div className={rootStyles}>
      {nodes.map((component, index) => {
        const isCompressed = type === 'compressed';
        const isNotFirst = index > 0;
        const isNotLast = index < nodes.length - 1;

        const {
          key,
          props: {
            'data-testid': childDataTestId = `${dataTestId}--step-${index}`,
            title,
            kind,
            $width = stepWidth,
          },
        } = component;

        return (
          <Fragment key={key ?? index}>
            <div className={wrapperStepStyles}>
              <ProgressStep
                data-testid={childDataTestId}
                onClick={onStepClick !== undefined && ((): void => onStepClick(index))}
                {...{ index, title, kind, size, type, hideText, responsiveBreakpoint, $width }}
              />

              {isNotFirst && !isCompressed && (
                <div
                  data-testid={`${dataTestId}__separator`}
                  role="separator"
                  className={dividerStyles}
                />
              )}
            </div>

            {isNotLast && isCompressed && (
              <div
                data-testid={`${dataTestId}__separator`}
                role="separator"
                className={compressedDividerStyles}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
