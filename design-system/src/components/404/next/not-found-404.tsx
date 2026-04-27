import type { ReactElement } from 'react';

import { CloudServiceManagement, Undo } from '@carbon/icons-react';
import { Link } from 'react-router-dom';

import { BackgroundIcon } from '@components/background-icon';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import { Button } from '../../button';
import { Text } from '../../text';

import {
  ACTION_BUTTON_SIZE,
  BACKGROUND_ICON_SIZE,
  DESCRIPTION_MARGIN,
  ICON_SIZE,
  TITLE_FONT_WEIGHT,
  TITLE_MARGIN,
} from './not-found-404.constants';
import { StyledWrapper } from './not-found-404.styles';

interface NotFound404Props {
  actionButtonLink?: string;
}

const dataTestId = 'not-found-404';

/**
 * View for the message when the user has no permissions to access to the route.
 */
export const NotFound404 = ({ actionButtonLink = '/' }: NotFound404Props): ReactElement => {
  const { t } = useTranslation();
  const { theme } = useCss();

  return (
    <StyledWrapper data-testid={dataTestId}>
      <BackgroundIcon
        shape="square"
        backgroundColor="neutralWashed"
        size={BACKGROUND_ICON_SIZE}
      >
        <CloudServiceManagement
          size={ICON_SIZE}
          color={theme.colors.neutralSubdued}
        />
      </BackgroundIcon>

      <Text
        variant="h1"
        fontWeight={TITLE_FONT_WEIGHT}
        color="contentPrimary"
        margin={TITLE_MARGIN}
      >
        {t('404.title')}
      </Text>
      <Text
        variant="h2"
        color="neutralSubdued"
        textAlign="center"
        margin={DESCRIPTION_MARGIN}
      >
        {t('404.description')}
      </Text>
      <Link
        data-testid={`${dataTestId}__action-link`}
        to={actionButtonLink}
        style={{ textDecoration: 'none' }}
      >
        <Button
          data-testid={`${dataTestId}__action-button`}
          size="44px"
          startEnhancer={<Undo size={ACTION_BUTTON_SIZE} />}
        >
          {t('404.actionButton')}
        </Button>
      </Link>
    </StyledWrapper>
  );
};
