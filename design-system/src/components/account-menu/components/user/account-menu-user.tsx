import type { ReactElement } from 'react';

import { Launch } from '@carbon/icons-react';

import { Avatar } from '@components/avatar';
import { Button } from '@components/button/next/button';
import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';

import { StyledUserDetails, StyledUserSection } from './account-menu.styles';

import type { AccountMenuProps } from '../../account-menu.interfaces';

/**
 * AccountMenuUser component displays user information in the account menu.
 * It shows the user's avatar, name, role (if available), and a link to manage the account.
 */
export const AccountMenuUser = ({
  dataTestId = 'account-menu__user-section',
  user,
  manageAccountButtonText = 'Gestionar cuenta',
  onManageAccountClick,
  showManageAccountButton = true,
}: AccountMenuProps): ReactElement => {
  const { name, avatarSrc, role, company } = user;
  const roleCompanyText = [role, company].filter(Boolean).join(' | ');
  const { theme } = useCss();

  return (
    <StyledUserSection data-testid={dataTestId}>
      <Avatar
        showTooltip={false}
        backgroundColor="brandSubtle"
        name={name}
        size="32px"
        src={avatarSrc}
      />

      <StyledUserDetails>
        <Text
          variant="bodySmall"
          color="neutralMedium"
          fontWeight="700"
          textAlign="center"
          margin={0}
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          paddingLeft={theme.spacing.spacingMd}
          paddingRight={theme.spacing.spacingMd}
        >
          {name}
        </Text>

        {roleCompanyText && (
          <Text
            variant="bodySmall"
            color="neutralMedium"
            fontWeight="400"
            textAlign="center"
            margin={0}
            paddingLeft={theme.spacing.spacingMd}
            paddingRight={theme.spacing.spacingMd}
          >
            {roleCompanyText}
          </Text>
        )}
      </StyledUserDetails>

      {showManageAccountButton && (
        <Button
          data-testid={`${dataTestId}__manage-account-button`}
          endEnhancer={Launch}
          kind="brand"
          appearance="tonal"
          onClick={onManageAccountClick}
        >
          {manageAccountButtonText}
        </Button>
      )}
    </StyledUserSection>
  );
};
