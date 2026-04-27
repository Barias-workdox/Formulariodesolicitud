import { ReactComponent as BrainIcon } from '@assets/icons/webdox-ai/brain-icon.svg';
import { ReactComponent as WebdoxAISpinnerIcon } from '@assets/icons/webdox-ai/webdox-ai-spinner.svg';
import { useCss } from '@components/utils/hooks/use-css';

import { StyledContainer } from './styled-components';
import { styles } from './webdox-ai-spinner.styles';

import type { WithTestId } from '@interfaces/common.interfaces';

/**
 * Component that displays the Webdox AI spinner.
 */
export const WebdoxAISpinner = ({ dataTestId = 'webdox-ai-spinner' }: WithTestId): JSX.Element => {
  const { iconStyles, spinnerStyles } = useCss(styles);

  return (
    <StyledContainer data-testid={dataTestId}>
      <BrainIcon className={iconStyles} />
      <WebdoxAISpinnerIcon className={spinnerStyles} />
    </StyledContainer>
  );
};
