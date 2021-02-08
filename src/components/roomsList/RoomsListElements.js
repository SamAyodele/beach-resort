import styled from 'styled-components';

export const EmptySearch = styled.div`
  text-align: center;
  text-transform: capitalize;
  margin: 2em 0;
  padding: 1em;
  letter-spacing: var(--mainSpacing);
`;

export const RoomsListContainer = styled.section`
  padding: 5em 0;
`;

export const RoomsListWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-row-gap: 2em;
  grid-column-gap: 30px;

  @media (min-width: 776px) {
    width: 90vw;
  }

  @media (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;
