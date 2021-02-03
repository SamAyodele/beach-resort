import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: inline-block;
  background: rgba(0, 0, 0, 0.5);
  color: var(--mainWhite);
  padding: 2em 1em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);

  @media (min-width: 576px) {
    padding: 2em 3em;
  }

  @media (min-width: 992px) {
    padding: 2em 6em;
  }

  h1 {
    font-size: 2.5rem;

    @media (min-width: 576px) {
      font-size: 3rem;
    }

    @media (min-width: 992px) {
      font-size: 4rem;
    }
  }

  div {
    width: 10em;
    height: 5px;
    background: var(--primaryColor);
    margin: 1.7em auto;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;
