import { styled } from '../../stitches.config';
import dropdownIcon from '../../assets/dropdown.svg';
import infoIcon from '../../assets/info-icon.svg';
import modeIcon from '../../assets/mode-icon.svg';
import smallDroddownIcon from '../../assets/dropdown-small.svg';

export const Wrapper = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // padding: '30px',
  gap: '22px',
  position: 'relative',
  maxWidth: '464px',
  maxHeight: '556px',
  // width: '464px',
  // height: '556px',
  background:
    'radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(0, 0, 0, 0.2) 0%, rgba(4, 4, 4, 0) 100%)',
  backdropFilter: 'blur(20px)',
  borderRadius: '30px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    right: '-1px',
    bottom: '-1px',
    zIndex: -1,
    background:
      'radial-gradient(60% 112.58%, #E5E54B 100%, #b72626 0%), radial-gradient(75.38% 222.5% at -13.75% -12.36%, #E5E54B 100%, #ffffff 0%)',
    borderRadius: 'inherit',
  },
});

export const ContainerBackground = styled('div', {
  position: 'absolute',
  top: '1px',
  bottom: '1px',
  left: '1px',
  right: '1px',
  borderRadius: '30px',
  backgroundColor: '#1E1E1E',
});

export const ContainerInnerBackground = styled('div', {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '207px',
  height: '202px',
  background:
    'linear-gradient(135deg, #E5E54B 2.88%, #EF5322 98.14%)',
  filter: 'blur(109px)',
});

export const Container = styled('div', {
  width: '100%',
  height: '100%',
  zIndex: '10',
  margin: '35px 0px',
});

export const SwapContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '14px 18px',
  background: '#101010',
  borderRadius: '24px',
  justifyContent: 'space-between',
  margin: '0px 24px',
});

export const SwapSettingsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'end',
  margin: '0px 30px 20px 24px',
});

export const SwapSettingsIcon = styled('img', {
  width: '16px',
  height: '16px',
  marginLeft: '18px',
  cursor: 'pointer',
});

export const SwapValueContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const SwapAddressContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
});

export const SwapAddressDollarValue = styled('div', {
  fontSize: '13px',
  lineHeight: '24px',
  color: '#7185AA',
});

export const SwapAddressInputValue = styled('input', {
  fontSize: '24px',
  lineHeight: '42px',
  color: '#FFFFFF',
  background: 'transparent',
  border: 'none',
  maxWidth: '165px',

  '&:focus-visible': {
    outline: 'none !important',
  },
});

export const SwapAddressOutputValue = styled('div', {
  fontSize: '24px',
  lineHeight: '42px',
  color: '#FFFFFF',
  background: 'transparent',
  border: 'none',
  maxWidth: '165px',
});

export const SwapAddressLabel = styled('div', {
  fontSize: '14px',
  lineHeight: '24px',
  color: '#7185AA',
});

export const SwapSelectedAddress = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#141822',
  borderRadius: '24px 6px 6px 24px',
  width: '91px',
  padding: '4px',
  marginTop: '4px',
  cursor: 'pointer',
});

export const SwapAddressIcon = styled('img', {
  width: '32px',
  height: '32px',
  marginRight: '5px',
});

export const SwapAddressName = styled('div', {
  width: '28px',
  height: '20px',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: '700',
  color: '#E5E5E5',
});

export const DropdownIcon = styled('div', {
  width: '12px',
  height: '10px',
  marginRight: '2px',
  backgroundImage: `url(${dropdownIcon})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
});

export const SwapSwitchContainer = styled('div', {
  position: 'relative',
  margin: '0px 24px',
});

export const SwapSwitch = styled('div', {
  width: '100%',
  height: '1px',
  background: '#101010',
  margin: '22px 0px',
});

export const SwapSwitchIcon = styled('div', {
  width: '40px',
  height: '40px',
  background: '#101010',
  borderRadius: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  cursor: 'pointer',
});

export const SwapSwitchImage = styled('img', {
  transition: 'transform 250ms ease 0s',
  '&:hover': {
    transform: 'rotate(180deg)',
  },
});

export const SwapPercentageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '20px 24px',
  gap: '25px',
});

export const SwapPercentage = styled('div', {
  // width: '85px',
  flex: '1',
  height: '34px',
  background: '#101010',
  borderRadius: '7px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1.5px solid #1D2A43',
  color: '#637488',
  fontSize: '14px',
  lineHeight: '18px',
  textAlign: 'center',
});

export const SwapButtonContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0px 24px',
});

export const SwapButton = styled('button', {
  width: '100%',
  height: '54px',
  borderRadius: '14px',
  background: '#E5E54B',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  border: 'initial',
  cursor: 'pointer',
});

export const SwapPreviewContainer = styled('div', {
  background: '#101010',
  margin: '0px 24px 24px',
  borderRadius: '13px',
  padding: '13px 18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const SwapPreviewInfoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const SwapPreviewInfo = styled('div', {
  width: '14px',
  height: '14px',
  backgroundImage: `url(${infoIcon})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  marginRight: '14px',
});

export const SwapPreviewConversion = styled('div', {
  color: '#FFFFFF',
  fontSize: '15px',
  lineHeight: '19px',
  marginRight: '3px',
});

export const SwapPreviewConversionDollar = styled('div', {
  color: '#637488',
  fontSize: '15px',
  lineHeight: '19px',
});

export const SwapPreviewDropdownContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const SwapPreviewIcon = styled('div', {
  width: '19px',
  height: '19px',
  backgroundImage: `url(${modeIcon})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  marginRight: '2px',
});

export const SwapPreviewInDollar = styled('div', {
  color: '#637488',
  fontSize: '15px',
  lineHeight: '19px',
  marginRight: '7px',
});

export const SwapDropdownIcon = styled('div', {
  width: '12px',
  height: '10px',
  backgroundImage: `url(${smallDroddownIcon})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
});
