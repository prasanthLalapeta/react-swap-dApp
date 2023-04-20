import { styled } from '../../stitches.config';

export const Container = styled('div', {
  width: '100%',

  '@md': {
    overflow: 'hidden',
  },
});

export const SwapContainer = styled('div', {
  width: '100%',
  paddingTop: 'calc(72px + 7vw)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
