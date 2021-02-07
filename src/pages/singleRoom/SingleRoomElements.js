import styled from 'styled-components';

export const SingleRoomContainer = styled.section`
  padding: 5em 0 0 0;
`;

export const SingleRoomWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-row-gap: 2em;
  grid-column-gap: 50px;

  img {
    width: 100%;
    display: block;
  }

  @media (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

export const SingleRoomInfo = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr;
  margin: 2em auto;

  @media (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2em;
  }
`;

export const Desc = styled.article`
  margin: 1em 0;

  h3 {
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }

  p {
    line-height: 1.5;
  }
`;

export const Info = styled.article`
  margin: 1em 0;

  h3,
  h6 {
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }

  h6 {
    font-weight: 300;
  }

  @media (min-width: 992px) {
    padding-left: 3em;
  }
`;

export const SingleRoomExtras = styled.section`
  width: 80vw;
  margin: 0 auto 3em auto;

  h6 {
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }

  @media (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

export const ExtrasList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-column-gap: 2em;
  grid-row-gap: 1em;
`;
