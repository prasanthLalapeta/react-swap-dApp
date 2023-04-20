import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      backgroundColor: '#ffffff',
      navBackgroundColor: '#ffffff',
      buttonBackgroundColor: '#ffffff',
      mainTextColor: '#23262F',
      tabActive: '#23262F',
      borderColor: '#E5E8EB',
      buttonsBorderColor: '#E5E8EB',
      nftCardName: '#767D8E',
      nftCardId: '#23262F',
      nftCardSubSection: '#f6f7f9',
      tableBackgroundColor: '#FAFBFD',
      tableTextColor: '#777E90',
      tableNftActivityTextColor: '#767D8E',
      tableLinkTextColor: '#2C3BFF',
      tableRowHoverColor: '#F4F5F6',
      openAccordion: '#FAFBFD',
      closeAccordion: '#ffffff',
      accordionHeadingTextColor: '#767D8E',
      accordionContentBackgroundColor: '#FAFBFD',
      chipsTextColor: '#000000',
      chipsBackgroundColor: '#F4F5F6',
      chipsNftBackgroundColor: '#F4F5F6',
      modalOverlay: '#fafbfde6',
      skeletonBackground:
        'linear-gradient(160deg, rgb(209 211 213) 20%, rgb(247, 248, 250) 80%)',
      checkboxSelectedFiltersText: '#23262F',
      greyMid: '#767D8E',
      error: '#FD5F51',
      primary: '#2C3BFF',
      success: '#00AC7C',
      modalText: '#767D8E',
      toastBackground: '#ffffff',
      iconGrey: '#767D8F',
      lightYellow: '#ffd71926',
      paleYellow: '#987E00',
      regentGrey: '#777E8F',
      mobilePrincipalIdGrey: '#23262F99',
      mobileStyledIconColor: '#23262F',
      defaultBackgroundColour: '#000000',
      defaultTxtColour: '#FFFFFF',
      textNeutralColor: '#777E90',
      disconnectedTextColor: 'rgba(35, 38, 47, 0.6)',
      mobileTableHeader: '#FBFBFB',
      mobileBackgroundColor: '#FAFAFA',
      lightGreyColor: '#3535354d',
      primaryTextColor: '#000000',
      secondaryTextColor: '#474747',
      primaryBackgroundColor: '#ffffff',
      lightGreen: '#4bec78',
      lightPink: '#ee38c6',
      lightBlue: '#3ae2f8',
      yellow: '#f5ca32',
      gainsboroColor: 'rgba(22, 22, 26, 0.04)',
      whiteSmoke: '#F3F3F3',
      steel: '#848B9E',
      greenGradient:
        'linear-gradient(121.13deg, #FFFFFF 63.87%, #77F89B 174.51%)',
      pinkGradient:
        'linear-gradient(121.13deg, #FFFFFF 63.87%, #F97CDD 174.51%)',
      blueGradient:
        'linear-gradient(115.46deg, #FFFFFF 62.34%, #80EDFB 139.74%)',
      yellowGradient:
        'linear-gradient(121.13deg, #FFFFFF 63.87%, #F8DA73 174.51%)',
      grayAzure: '#737B8D',
    },
    space: {},
    fonts: {},
    shadows: {
      default: '0px 0px 8px #E6E9EF',
      active: '0px 0px 16px #E6E9EF',
    },
  },
  media: {
    // TODO: For responsiveness
    // find that is best to do mobile first approach
    // which means that you'd have min-width, instead
    // of max-width, to allow you to provide a set of
    // rules that fulfill a wider range
    xs: '(max-width: 400px)',
    sm: '(max-width: 640px)',
    md: '(max-width: 850px)',
    lg: '(max-width: 1140px)',
    // TODO: considering the request above
    // here's a temporary breakpoint
    large: '(min-width: 1140px)',
  },
  utils: {},
});

export const darkTheme = createTheme({
  colors: {
    backgroundColor: '#1E1E1E',
    navBackgroundColor: '#1E1E1E',
    buttonBackgroundColor: '#000000',
    mainTextColor: '#ffffff',
    borderColor: '#353945',
    buttonsBorderColor: '#353945',
    nftCardName: '#777E90',
    nftCardId: '#777E90',
    nftCardSubSection: '#202022',
    tableBackgroundColor: '#141416',
    tableTextColor: '#ffffff',
    tableNftActivityTextColor: '#ffffff',
    tableLinkTextColor: '#2253FF',
    tableRowHoverColor: '#141416',
    openAccordion: '#19191C',
    closeAccordion: '#141416',
    accordionHeadingTextColor: '#ffffff',
    accordionContentBackgroundColor: '#141416',
    chipsTextColor: '#ffffff',
    chipsBackgroundColor: '#000000',
    chipsNftBackgroundColor: 'transparent',
    tabActive: '#ffffff',
    modalOverlay: '#0a0a0ae6',
    skeletonBackground:
      'linear-gradient(160deg, rgb(36 34 34) 20%, rgb(41 42 44) 80%)',
    checkboxSelectedFiltersText: '#2C3BFF',
    error: '#FD5F51',
    primary: '#2C3BFF',
    success: '#00AC7C',
    modalText: '#767D8E',
    toastBackground: '#1e1e1e',
    mobilePrincipalIdGrey: '#FFFFFF99',
    mobileStyledIconColor: '#727273',
    defaultBackgroundColour: '#FFFFFF',
    defaultTxtColour: '#000000',
    textNeutralColor: '#777E90',
    disconnectedTextColor: '#FFFFFF',
    mobileTableHeader: '#141416',
    mobileBackgroundColor: '#141416',
    lightGreyColor: '#353535',
    primaryTextColor: '#FFFFFF',
    secondaryTextColor: '#777e90',
    primaryBackgroundColor: '#000000',
    whiteSmoke: '#242427',
    steel: '#848B9E',
    greenGradient:
      'linear-gradient(121.13deg, #242427 63.87%, #77F89B 174.51%)',
    pinkGradient:
      'linear-gradient(121.13deg, #242427 63.87%, #F97CDD 174.51%)',
    blueGradient:
      'linear-gradient(121.13deg, #242427 63.87%, #80EDFB 174.51%)',
    yellowGradient:
      'linear-gradient(121.13deg, #242427 63.87%, #F8DA73 174.51%)',
    grayAzure: '#737B8D',
  },
  shadows: {
    default: 'none',
    active: 'none',
  },
});
