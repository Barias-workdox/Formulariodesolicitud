import { useCss } from '@components/utils/hooks/use-css';

import {
  TitleLayoutContainer,
  TitleLayoutSubtitleContainer,
  TitleLayoutTitleContainer,
  titleLayoutStyles,
} from './title-layout.styles';

import type { StyleObject } from 'styletron-standard';

export interface TitleLayoutProps {
  titleText: React.ReactNode;
  startEnhancer?: React.ReactNode;
  subtitleText?: React.ReactNode;
  overrides?: {
    Root?: StyleObject;
    StartEnhancer?: StyleObject;
    TitleContainer?: StyleObject;
    SubtitleContainer?: StyleObject;
  };
  'data-testid'?: string;
  onClick?(): void;
}

/** A Styled layout for Title cell used by a lot of tables (mainly) */
export const TitleLayout = ({
  titleText,
  startEnhancer = null,
  subtitleText = null,
  onClick = null,
  overrides = {},
  'data-testid': dataTestId,
}: TitleLayoutProps): JSX.Element => {
  const hasIcon = startEnhancer !== null;
  const { iconContainer } = useCss(titleLayoutStyles, { hasIcon, overrides });

  return (
    <TitleLayoutContainer
      data-testid={dataTestId}
      $hasIcon={hasIcon}
      $style={overrides.Root}
      onClick={onClick}
    >
      <div className={iconContainer}>{startEnhancer}</div>
      <TitleLayoutTitleContainer
        $hasSubtitle={subtitleText !== null}
        $style={overrides.TitleContainer}
      >
        {titleText}
      </TitleLayoutTitleContainer>
      {subtitleText && (
        <TitleLayoutSubtitleContainer $style={overrides.SubtitleContainer}>
          {subtitleText}
        </TitleLayoutSubtitleContainer>
      )}
    </TitleLayoutContainer>
  );
};
