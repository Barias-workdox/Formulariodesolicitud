import type { ReactElement } from 'react';

import { useCss } from '@components/utils/hooks/use-css';

import type { IconProps } from '../../interfaces/icon.interface';

/** A Styled star icon */
export const StarIcon = ({ fill, height = '16', width = '16' }: IconProps): ReactElement => {
  const { theme } = useCss();

  const validatedFill = fill ?? theme.colors.neutral;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1016 0.0976562L13.0297 2.36052L15.6017 3.59776L13.0297 4.83547L12.1016 7.09787L11.1735 4.83547L8.60146 3.59776L11.1735 2.36052L12.1016 0.0976562Z"
        fill={validatedFill}
      />
      <path
        d="M6.60156 3.60156L8.21901 7.54514L12.7013 9.70133L8.21901 11.8583L6.60156 15.8011L4.98412 11.8583L0.501796 9.70133L4.98412 7.54514L6.60156 3.60156Z"
        fill={validatedFill}
      />
    </svg>
  );
};
