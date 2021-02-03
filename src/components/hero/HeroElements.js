import styled from 'styled-components';

import defaultBcg from '../../images/defaultBcg.jpeg';
import roomBg from '../../images/room-2.jpeg';

export const HeroContainer = styled.header`
  min-height: ${({ type }) =>
    type === 'default' ? 'calc(100vh - 66px)' : '60vh'};
  background-image: ${({ type }) =>
    type === 'default' ? `url(${defaultBcg})` : `url(${roomBg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
