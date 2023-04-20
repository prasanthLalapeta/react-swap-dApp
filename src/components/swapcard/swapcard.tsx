import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Wrapper,
  ContainerBackground,
  ContainerInnerBackground,
  Container,
  SwapSettingsContainer,
  SwapSettingsIcon,
  SwapContainer,
  SwapValueContainer,
  SwapAddressContainer,
  SwapAddressDollarValue,
  SwapAddressInputValue,
  SwapAddressOutputValue,
  SwapAddressLabel,
  SwapSelectedAddress,
  SwapAddressIcon,
  SwapAddressName,
  DropdownIcon,
  SwapSwitchContainer,
  SwapSwitch,
  SwapSwitchIcon,
  SwapSwitchImage,
  SwapPercentageContainer,
  SwapPercentage,
  SwapPreviewContainer,
  SwapPreviewInfoContainer,
  SwapPreviewInfo,
  SwapPreviewConversion,
  SwapPreviewConversionDollar,
  SwapPreviewDropdownContainer,
  SwapPreviewInDollar,
  SwapPreviewIcon,
  SwapDropdownIcon,
  SwapButtonContainer,
  SwapButton,
} from './styles';
import ethIcon from '../../assets/eth-icon.svg';
import arbIcon from '../../assets/arb-icon.svg';
import switchIcon from '../../assets/switch-icon.svg';
import refreshIcon from '../../assets/refresh-icon.svg';
import settingsIcon from '../../assets/settings-icon.svg';

import { useAppDispatch, notificationActions } from '../../store';

/* --------------------------------------------------------------------------
 * swap Component
 * --------------------------------------------------------------------------*/

export const SwapCard = () => {
  const { t } = useTranslation();
  const [inputToken, setInputToken] = useState('ETH');
  const [outputToken, setOutputToken] = useState('ARB');
  const [inputAmount, setInputAmount] = useState(1);
  const [outputAmount, setOutputAmount] = useState('');

  const dispatch = useAppDispatch();

  const handleInputChange = (event: any) => {
    setInputToken(event.target.value);
  };

  const handleOutputChange = (event: any) => {
    setOutputToken(event.target.value);
  };

  const handleAmountChange = (event: any) => {
    setInputAmount(event.target.value);
  };

  const handleSwitchToken = (event: any) => {
    const updatedOutputToken = inputToken;
    const updatedInputToken = outputToken;
    setOutputToken(updatedOutputToken);
    setInputToken(updatedInputToken);
  };

  const handleSwapClick = () => {
    dispatch(notificationActions.setSuccessSetting(true));

    // Dispatch an action to reset the booleanValue to false after 3 seconds
    const timeoutId = setTimeout(() => {
      dispatch(notificationActions.setSuccessSetting(false));
    }, 3000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  };

  return (
    <Wrapper>
      <ContainerBackground />
      <ContainerInnerBackground />
      <Container>
        <SwapSettingsContainer>
          <SwapSettingsIcon src={refreshIcon} alt="refresh-icon" />
          <SwapSettingsIcon src={settingsIcon} alt="settings-icon" />
        </SwapSettingsContainer>

        <SwapContainer>
          <SwapValueContainer>
            <SwapAddressDollarValue>
              ~$10 921.69
            </SwapAddressDollarValue>
            <SwapAddressInputValue
              value={inputAmount}
              onChange={handleAmountChange}
            ></SwapAddressInputValue>
          </SwapValueContainer>
          <SwapAddressContainer>
            <SwapAddressLabel>You buy</SwapAddressLabel>
            <SwapSelectedAddress>
              <SwapAddressIcon
                src={inputToken === 'ETH' ? ethIcon : arbIcon}
                alt="from-address"
              />
              <SwapAddressName>{inputToken}</SwapAddressName>
              <DropdownIcon />
            </SwapSelectedAddress>
          </SwapAddressContainer>
        </SwapContainer>

        <SwapSwitchContainer>
          <SwapSwitch />
          <SwapSwitchIcon onClick={handleSwitchToken}>
            <SwapSwitchImage src={switchIcon} alt="switch-icon" />
          </SwapSwitchIcon>
        </SwapSwitchContainer>

        <SwapContainer>
          <SwapValueContainer>
            <SwapAddressDollarValue>
              ~$10 921.69
            </SwapAddressDollarValue>
            <SwapAddressOutputValue>
              1920.73412
            </SwapAddressOutputValue>
          </SwapValueContainer>
          <SwapAddressContainer>
            <SwapAddressLabel>You sell</SwapAddressLabel>
            <SwapSelectedAddress>
              <SwapAddressIcon
                src={outputToken === 'ETH' ? ethIcon : arbIcon}
                alt="to-address"
              />
              <SwapAddressName>{outputToken}</SwapAddressName>
              <DropdownIcon />
            </SwapSelectedAddress>
          </SwapAddressContainer>
        </SwapContainer>

        <SwapPercentageContainer>
          <SwapPercentage>25%</SwapPercentage>
          <SwapPercentage>50%</SwapPercentage>
          <SwapPercentage>75%</SwapPercentage>
          <SwapPercentage>100%</SwapPercentage>
        </SwapPercentageContainer>

        <SwapPreviewContainer>
          <SwapPreviewInfoContainer>
            <SwapPreviewInfo />
            <SwapPreviewConversion>
              1 ETH = 2031.21 ARB
            </SwapPreviewConversion>
            <SwapPreviewConversionDollar>
              ($2 030.4)
            </SwapPreviewConversionDollar>
          </SwapPreviewInfoContainer>

          <SwapPreviewDropdownContainer>
            <SwapPreviewIcon />
            <SwapPreviewInDollar>$0</SwapPreviewInDollar>
            <SwapDropdownIcon />
          </SwapPreviewDropdownContainer>
        </SwapPreviewContainer>

        <SwapButtonContainer>
          <SwapButton onClick={handleSwapClick}>Swap</SwapButton>
        </SwapButtonContainer>
      </Container>
    </Wrapper>
  );
};
