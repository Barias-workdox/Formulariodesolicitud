import { FILES_LIST_ITEM_HEIGHT } from '@components/file-upload-manager/file-upload-manager.constants';
import { themedStyled } from '@themes/utilities';

export const StyledContainer = themedStyled<'div', { $isHovered?: boolean }>(
  'div',
  ({ $theme, $isHovered = false }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${$theme.spacing.spacing2xs} ${$theme.spacing.spacingXs}`,
    alignItems: 'center',
    maxWidth: '100%',
    height: `${FILES_LIST_ITEM_HEIGHT}px`,
    gap: $theme.spacing.spacingXs,
    backgroundColor: $isHovered ? $theme.colors.neutralWashed : undefined,
    boxSizing: 'border-box',
  }),
);

export const StyledIconWrapper = themedStyled('div', ({ $theme }) => ({
  padding: `${$theme.spacing.spacingXs} ${$theme.spacing.spacing2xs}`,
}));

export const StyledFileDetails = themedStyled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,
  maxWidth: '100%',
});

export const StyledPathAndNameContainer = themedStyled('div', {
  display: 'flex',
  minWidth: 0,
});

export const StyledPathContainer = themedStyled('div', {
  flexShrink: 1,
  minWidth: 0,
  maxWidth: '50%',
});

export const StyledNameContainer = themedStyled('div', {
  flexShrink: 1,
  minWidth: 0,
});
