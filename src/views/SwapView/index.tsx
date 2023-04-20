import React from 'react';
import { SwapCard } from '../../components';
import { Container, SwapContainer } from './styles';
import { useErrorsStore } from '../../store';
import { ConfettiParticles } from '../../components/particles';
/* --------------------------------------------------------------------------
 * Swap View Component
 * --------------------------------------------------------------------------*/

const SwapView = () => {
  const { showSuccess } = useErrorsStore();

  return (
    <Container>
      <SwapContainer>
        <SwapCard />
      </SwapContainer>
      {showSuccess && <ConfettiParticles />}
    </Container>
  );
};

export default SwapView;
