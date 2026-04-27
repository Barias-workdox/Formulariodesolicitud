import type { ReactElement } from 'react';

import { DataError } from '@carbon/icons-react';
import { Link } from 'react-router-dom';

import { useTranslation } from '@components/utils/i18n';

import { BackgroundIcon } from '../background-icon';
import { Button } from '../button';
import { Text } from '../text';
import { useCss } from '../utils/hooks/use-css';

import type { StyleObject } from 'styletron-standard';

interface StyleParams {
  bgImagePath: string;
}

const styles = {
  pageStyles: (_, { bgImagePath }: StyleParams): StyleObject => ({
    background: `url("${bgImagePath}") no-repeat center`,
  }),
  wrapperStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    flexDirection: 'column',
    maxWidth: '300px',
    textAlign: 'center',
    margin: 'auto',
  } as StyleObject,
  linkStyles: {
    textDecoration: 'none',
  } as StyleObject,
};

interface NotFound404Props {
  bgImagePath: string;
  actionButtonLink?: string;
}

const dataTestId = 'not-found-404';

/**
 * View for the message when the user has no permissions to access to the route.
 */
export const NotFound404 = ({
  actionButtonLink = '/',
  bgImagePath,
}: NotFound404Props): ReactElement => {
  const { pageStyles, wrapperStyles, linkStyles, theme } = useCss(styles, { bgImagePath });
  const { t } = useTranslation();

  return (
    <div
      data-testid={dataTestId}
      className={pageStyles}
    >
      <div className={wrapperStyles}>
        <BackgroundIcon
          shape="round"
          backgroundColor="sweetWashed"
          iconColor="sweetStrong"
          Icon={DataError}
          size="56px"
        />
        <Text
          variant="h1"
          fontWeight="700"
          color="contentPrimary"
          marginTop={theme.spacing.spacingMd}
          marginBottom={0}
        >
          {t('404.title')}
        </Text>
        <Text
          variant="h2"
          fontWeight="500"
          color="contentPrimary"
          margin={0}
        >
          {t('404.subtitle')}
        </Text>
        <Text
          variant="bodySmall"
          fontWeight="400"
          color="neutralSubdued"
          textAlign="center"
          margin={`${theme.spacing.spacingMd} 0`}
        >
          {t('404.description')}
        </Text>
        <Link
          data-testid={`${dataTestId}__action-link`}
          to={actionButtonLink}
          className={linkStyles}
        >
          <Button data-testid={`${dataTestId}__action-button`}>{t('404.actionButton')}</Button>
        </Link>
      </div>
    </div>
  );
};
