import styled from 'styled-components';

import defaultBcg from '../../images/defaultBcg.jpeg';

export const HeroContainer = styled.header`
  min-height: ${({ img }) => (img ? '60vh' : 'calc(100vh - 66px)')};
  background-image: ${({ img }) =>
    img ? `url(${img})` : `url(${defaultBcg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
