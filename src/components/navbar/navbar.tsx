import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import {
  useThemeStore,
  themeActions,
  useAppDispatch,
} from '../../store';
import { LinkButton } from '../core';
import {
  Container,
  LogoContainer,
  LogoIcon,
  ByLogo,
  ActionButtonsContainer,
  MobileMenuContainer,
  NavBarWrapper,
  MobileNavbarIcons,
  BackIcon,
  StyleRouter,
  PoweredByLogoIcon,
} from './styles';
import { Icon } from '../icons';
import { MobileNavBar } from './mobile-nav-bar';
import useMediaQuery from '../../hooks/use-media-query';

/* --------------------------------------------------------------------------
 * NavBar Component
 * --------------------------------------------------------------------------*/

export const NavBar = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { theme } = useThemeStore();
  const { pathname } = useLocation();
  const isLightTheme = theme === 'lightTheme';
  const [openMobileNavbar, setOpenMobileNavbar] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [stopAnimation, setStopAnimation] = useState(false);
  const isMobileScreen = useMediaQuery('(max-width: 850px)');

  const changeThemeHandler = useCallback(() => {
    dispatch(
      themeActions.setTheme(
        isLightTheme ? 'darkTheme' : 'lightTheme',
      ),
    );
  }, [isLightTheme, dispatch]);

  return (
    <Container openMobileNavbar={openMobileNavbar}>
      <NavBarWrapper>
        <StyleRouter
          to="/"
          onClick={() => {
            pathname === '/' && window.location.reload();
            setOpenMobileNavbar(false);
          }}
          startAnimation={startAnimation}
        >
          <LogoContainer>
            <LogoIcon
              src="https://photos.wellfound.com/startups/i/9482167-cc31e4463fcf728166215918cbe9e91f-medium_jpg.jpg?buster=1681394513"
              alt="swap - dApp-logo"
            />
            <ByLogo>by</ByLogo>
            <PoweredByLogoIcon
              src="https://logos.textgiraffe.com/logos/logo-name/Prasanth-designstyle-smoothie-m.png"
              alt="by-prasanth"
            />
          </LogoContainer>
        </StyleRouter>
        {!isMobileScreen && (
          <ActionButtonsContainer>
            <LinkButton handleClick={changeThemeHandler}>
              <Icon icon={isLightTheme ? 'moon' : 'sun'} />
            </LinkButton>
          </ActionButtonsContainer>
        )}
        {isMobileScreen && (
          <MobileMenuContainer
            startAnimation={startAnimation}
            stopAnimation={stopAnimation}
          >
            <MobileNavbarIcons
              icon={openMobileNavbar ? 'close' : 'hamburger'}
              size="lg"
              paddingLeft
              onClick={() => setOpenMobileNavbar(!openMobileNavbar)}
            />
          </MobileMenuContainer>
        )}
      </NavBarWrapper>
      {isMobileScreen && (
        <MobileNavBar
          openMobileNavbar={openMobileNavbar}
          changeThemeHandler={changeThemeHandler}
        />
      )}
    </Container>
  );
};
