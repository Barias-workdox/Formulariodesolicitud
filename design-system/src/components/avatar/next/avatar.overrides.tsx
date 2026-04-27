import type {
  AvatarKind,
  AvatarSize,
  AvatarAppearance,
  AvatarColorConfig,
} from './avatar.interface';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { DesignSystemColorType } from '@themes';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { AvatarOverrides } from 'baseui/avatar';
import type { StyleObject } from 'styletron-react';

/**
 * Maps avatar kinds and appearances to their corresponding color configurations
 */
const avatarColorMap: Record<AvatarKind, Record<AvatarAppearance, AvatarColorConfig>> = {
  users: {
    filled: { backgroundColor: 'brand', textColor: 'textBase' },
    tonal: { backgroundColor: 'brandWashed', textColor: 'brand' },
    image: { backgroundColor: 'transparent', textColor: 'textBase' },
  },
  group: {
    filled: { backgroundColor: 'neutral', textColor: 'textBase' },
    tonal: { backgroundColor: 'neutralWashed', textColor: 'neutralMedium' },
    image: { backgroundColor: 'transparent', textColor: 'textBase' },
  },
  people: {
    filled: { backgroundColor: 'peace', textColor: 'textBase' },
    tonal: { backgroundColor: 'peaceWashed', textColor: 'peaceMedium' },
    image: { backgroundColor: 'transparent', textColor: 'textBase' },
  },
  companies: {
    filled: { backgroundColor: 'power', textColor: 'textBase' },
    tonal: { backgroundColor: 'powerWashed', textColor: 'powerMedium' },
    image: { backgroundColor: 'transparent', textColor: 'textBase' },
  },
  mint: {
    filled: { backgroundColor: 'positive', textColor: 'textBase' },
    tonal: { backgroundColor: 'positiveSubtle', textColor: 'positiveMedium' },
    image: { backgroundColor: 'transparent', textColor: 'textBase' },
  },
  cherry: {
    filled: { backgroundColor: 'negative', textColor: 'textBase' },
    tonal: { backgroundColor: 'negativeWashed', textColor: 'negativeMedium' },
    image: { backgroundColor: 'transparent', textColor: 'textBase' },
  },
  sunrise: {
    filled: { backgroundColor: 'warning', textColor: 'textBase' },
    tonal: { backgroundColor: 'warningWashed', textColor: 'warningMedium' },
    image: { backgroundColor: 'transparent', textColor: 'textBase' },
  },
  sweet: {
    filled: { backgroundColor: 'sweet', textColor: 'textBase' },
    tonal: { backgroundColor: 'sweetWashed', textColor: 'sweetMedium' },
    image: { backgroundColor: 'transparent', textColor: 'textBase' },
  },
  heat: {
    filled: { backgroundColor: 'heat', textColor: 'textBase' },
    tonal: { backgroundColor: 'heatWashed', textColor: 'heatMedium' },
    image: { backgroundColor: 'transparent', textColor: 'textBase' },
  },
};

/**
 * Gets the background color and text color configuration for a given kind and appearance
 */
export const getAvatarColorConfig = (
  kind: AvatarKind,
  appearance: AvatarAppearance,
): AvatarColorConfig => {
  return avatarColorMap[kind][appearance];
};

// Complete mapping for fontSize based on avatar size
export const avatarFontSizeMap: Record<AvatarSize, string> = {
  '44px': '16px',
  '32px': '14px',
  '24px': '12px',
};

/** Avatar overrides */
export const getAvatarOverrides = ({
  dataTestId: dataTestId,
  backgroundColor,
  textColor,
  disabled,
  size,
  clickable,
  name,
}: WithTestId & {
  backgroundColor: DesignSystemColorType;
  textColor: DesignSystemColorType;
  disabled: boolean;
  size: AvatarSize;
  clickable: boolean;
  name: string;
}): AvatarOverrides => ({
  Root: {
    props: { 'data-testid': `${dataTestId}--root` },
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      backgroundColor: disabled ? $theme.colors.neutralSubtle : $theme.colors[backgroundColor],
      flexShrink: 0,
      cursor: clickable && !disabled ? 'pointer' : 'default',
      transition: clickable ? 'opacity 0.2s ease, transform 0.1s ease' : undefined,
    }),
  },
  Initials: {
    props: { 'data-testid': `${dataTestId}--initials` },
    style: ({ $theme }: StyleOverrideProps) => ({
      fontSize: avatarFontSizeMap[size],
      lineHeight: 'unset',
      fontWeight: 700,
      color: disabled ? $theme.colors.neutralDepressed : $theme.colors[textColor],
    }),
  },
  Avatar: {
    props: {
      'data-testid': `${dataTestId}--image`,
      alt: name,
    },
  },
});

/**
 * Processes initials based on avatar size to limit the number of characters displayed
 * - 44px size: shows up to 2 characters
 * - 32px and 24px sizes: shows up to 1 character
 * - Uses 'name' as fallback when 'initials' are not provided
 */
export const processInitials = (
  initials?: string,
  size: AvatarSize = '32px',
  name?: string,
): string | undefined => {
  let processedInitials = initials;

  // Fallback to name if no initials provided or if initials are empty/whitespace-only
  if ((!processedInitials || !processedInitials.trim()) && name) {
    // Extract initials from name (first letter of each word)
    processedInitials = name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('');
  }

  if (!processedInitials) return undefined;

  const trimmedInitials = processedInitials.trim().toUpperCase();
  if (!trimmedInitials) return undefined;

  if (size === '44px') {
    return trimmedInitials.slice(0, 2);
  }

  return trimmedInitials.slice(0, 1);
};
