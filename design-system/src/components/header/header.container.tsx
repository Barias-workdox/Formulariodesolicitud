import { HeaderAvatar } from './components/header-avatar';
import { HeaderBackgroundIcon } from './components/header-background-icon';
import { HeaderEmoji } from './components/header-emoji';
import { HeaderFileIconType } from './components/header-file-icon-type';
import { HeaderFlag } from './components/header-flag';
import { HeaderComponent } from './header';
import { HeaderProvider } from './header.provider';

import type { HeaderProps } from './header.interfaces';

/**
 * Header Container component that wraps Header with its Provider.
 */
const HeaderContainer = (props: HeaderProps): JSX.Element => {
  return (
    <HeaderProvider defaultProps={props}>
      <HeaderComponent {...props} />
    </HeaderProvider>
  );
};

HeaderContainer.BackgroundIcon = HeaderBackgroundIcon;
HeaderContainer.Emoji = HeaderEmoji;
HeaderContainer.Flag = HeaderFlag;
HeaderContainer.FileIconType = HeaderFileIconType;
HeaderContainer.Avatar = HeaderAvatar;

export const Header = HeaderContainer;
