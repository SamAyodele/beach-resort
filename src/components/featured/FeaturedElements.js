import styled from 'styled-components';

export const FeatureContainer = styled.div`
  padding: 5em 0;
`;

export const FeatureWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 40px;

  @media (min-width: 776px) {
    width: 90vw;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }

  @media (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;
