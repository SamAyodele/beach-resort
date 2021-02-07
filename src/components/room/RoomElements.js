import styled from 'styled-components';
import { BtnPrimary } from '../../helpers/GlobalStyles';

export const RoomContainer = styled.article`
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);

  &:hover {
    box-shadow: var(--darkShadow);
  }
`;

export const ImgContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    display: block;
    transition: var(--mainTransition);
  }
`;

export const PriceWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  color: var(--mainWhite);
  padding: 0.3em 0.6em 0.5em;
  border-bottom-right-radius: 1em;
  font-size: 0.5rem;
  text-align: center;
  transition: var(--mainTransition);

  h6 {
    margin-bottom: 0;
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: var(--mainSpacing);
  }
`;

export const RoomLink = styled(BtnPrimary)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s linear;
`;

export const RoomInfo = styled.p`
  background: var(--darkGrey);
  text-transform: capitalize;
  padding: 0.5em 0;
  text-align: center;
  font-weight: 700;
  letter-spacing: var(--mainSpacing);
`;
