import styled from 'styled-components';
import { FaAlignRight } from 'react-icons/fa';

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.75rem 2rem;
  background: var(--offWhite);
  box-shadow: 4px 4px 16px -4px rgba(0, 0, 0, 0.75);
  z-index: 1;
`;

export const NavCenter = styled.div`
  @media (min-width: 768px) {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
  }
`;

export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavIcon = styled(FaAlignRight)`
  font-size: 1.5rem;
  color: var(--primaryColor);
`;

export const NavLinks = styled.ul`
  height: ${({ isOpen }) => (isOpen ? '100px' : '0')};
  overflow: hidden;
  transition: var(--mainTransition);
  list-style-type: none;

  a {
    display: block;
    text-decoration: none;
    padding: 1rem 0;
    color: var(--mainBlack);
    transition: var(--mainTransition);
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: var(--mainSpacing);

    &:hover {
      color: var(--primaryColor);
    }

    @media (min-width: 768px) {
      margin: 0 1rem;
      padding: 0.5rem 0;
    }
  }

  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin-left: 4rem;
  }
`;
