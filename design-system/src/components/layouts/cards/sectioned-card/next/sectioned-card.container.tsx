import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { HeaderTabs } from '@components/header-tab';

import { SectionedCardBody } from './components/sectioned-card-body';
import { SectionedCardFooter } from './components/sectioned-card-footer';
import { SectionedCardHeader } from './components/sectioned-card-header';
import { SectionedCardHeaderTabs } from './components/sectioned-card-header-tabs';
import { SectionedCardComponent } from './sectioned-card';
import { SectionedCardProvider } from './sectioned-card.provider';

import type { SectionedCardProps } from './sectioned-card.interfaces';

/**
 * Sectioned Card Container component that wraps SectionedCard with its Provider.
 */
const SectionedCardContainer = (props: SectionedCardProps): JSX.Element => {
  return (
    <SectionedCardProvider defaultProps={props}>
      <SectionedCardComponent {...props} />
    </SectionedCardProvider>
  );
};

SectionedCardContainer.Header = Object.assign(SectionedCardHeader, {
  displayName: 'SectionedCard.Header',
});
SectionedCardContainer.Avatar = Object.assign(Header.Avatar, {
  displayName: 'SectionedCard.Avatar',
});
SectionedCardContainer.BackgroundIcon = Object.assign(Header.BackgroundIcon, {
  displayName: 'SectionedCard.BackgroundIcon',
});
SectionedCardContainer.Emoji = Object.assign(Header.Emoji, {
  displayName: 'SectionedCard.Emoji',
});
SectionedCardContainer.FileIconType = Object.assign(Header.FileIconType, {
  displayName: 'SectionedCard.FileIconType',
});
SectionedCardContainer.Flag = Object.assign(Header.Flag, {
  displayName: 'SectionedCard.Flag',
});

SectionedCardContainer.HeaderTabs = Object.assign(SectionedCardHeaderTabs, {
  displayName: 'SectionedCard.HeaderTabs',
});
SectionedCardContainer.HeaderTab = Object.assign(HeaderTabs.Tab, {
  displayName: 'SectionedCard.HeaderTab',
});
SectionedCardContainer.Footer = Object.assign(SectionedCardFooter, {
  displayName: 'SectionedCard.Footer',
});
SectionedCardContainer.Button = Object.assign(Footer.Button, {
  displayName: 'SectionedCard.Button',
});
SectionedCardContainer.Body = Object.assign(SectionedCardBody, {
  displayName: 'SectionedCard.Body',
});

export const SectionedCard = SectionedCardContainer;
