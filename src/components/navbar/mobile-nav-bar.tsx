import { useTranslation } from 'react-i18next';
import {
  MobileMenuContentWrapper,
  NavItem,
  NavItemContent,
  Flex,
  StyledSwitch,
  StyledThumb,
  StyledIcon,
} from './styles';
import { useThemeStore } from '../../store';

type MobileNavBarTypes = {
  openMobileNavbar: boolean;
  changeThemeHandler: () => void;
};

/* --------------------------------------------------------------------------
 * Mobile Navbar Component
 * --------------------------------------------------------------------------*/

export const MobileNavBar = ({
  openMobileNavbar,
  changeThemeHandler,
}: MobileNavBarTypes) => {
  const { t } = useTranslation();
  const { theme } = useThemeStore();

  return (
    <MobileMenuContentWrapper openMobileNavbar={openMobileNavbar}>
      {openMobileNavbar && (
        <NavItemContent>
          <NavItem onClick={changeThemeHandler}>
            <Flex justifyBetween>
              <Flex>
                <StyledIcon icon="nightMode" size="md" />
                <p>{t('translation:buttons.action.nigthMode')}</p>
              </Flex>
              <StyledSwitch checked={theme === 'darkTheme'}>
                <StyledThumb />
              </StyledSwitch>
            </Flex>
          </NavItem>
        </NavItemContent>
      )}
    </MobileMenuContentWrapper>
  );
};
