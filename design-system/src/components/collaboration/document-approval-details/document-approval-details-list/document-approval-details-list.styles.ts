import type { DesignSystemTheme } from '../../../../themes';
import type { StyleObject } from 'styletron-standard';

export const styles = {
  itemListWrapperStyles: (theme: DesignSystemTheme): StyleObject => ({
    padding: `${theme.spacing.spacingMd} ${theme.spacing.spacingXl}`,
    borderBottom: `1px solid ${theme.colors.neutralWashed}`,
    display: 'flex',
  }),
  itemListContentStyles: (theme: DesignSystemTheme): StyleObject => ({
    marginLeft: theme.spacing.spacingXs,
    width: '100%',
  }),
  thirdPartyContentStyles: (theme: DesignSystemTheme): StyleObject => ({
    marginBottom: theme.spacing.spacingXs,
    display: 'grid',
  }),
  thirdPartyText: (): StyleObject => ({
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
  reasonRejectionStyles: (theme: DesignSystemTheme): StyleObject => ({
    color: theme.colors.neutralSubdued,
    backgroundColor: theme.colors.neutralBase,
    margin: `${theme.spacing.spacingXs} 0 ${theme.spacing.spacing2xs} 0`,
    padding: `${theme.spacing.spacingMd} ${theme.spacing.spacingXl}`,
    wordBreak: 'break-word',
  }),
  reasonRejectionLabelStyles: (theme: DesignSystemTheme): StyleObject => ({
    fontWeight: 500,
    color: theme.colors.neutral,
  }),
};
