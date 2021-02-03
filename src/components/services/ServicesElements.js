import styled from 'styled-components';

export const ServicesContainer = styled.div`
  padding: 5em 0;
  background: var(--darkGrey);
  text-align: center;
`;

export const ServicesWrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  grid-row-gap: 2em;
  grid-column-gap: 50px;

  @media (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

export const Service = styled.article`
  span {
    display: inline-block;
    color: var(--primaryColor);
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  h6 {
    letter-spacing: var(--mainSpacing);
    text-transform: capitalize;
  }

  p {
    width: 80%;
    margin: 0 auto;

    @media (min-width: 1200px) {
      width: 100%;
    }
  }
`;
