import styled from 'styled-components';

export const FilterContainer = styled.div`
  padding: 5em 0;
`;

export const FilterForm = styled.form`
  width: 60vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
  grid-row-gap: 2em;
  grid-column-gap: 40px;

  @media (min-width: 776px) {
    width: 70vw;
  }

  @media (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

export const FormGroup = styled.div`
  text-transform: capitalize;

  label {
    display: block;
    letter-spacing: var(--mainSpacing);
    margin-bottom: 0.5em;
  }

  select,
  input {
    width: 100%;
    background: transparent;
    font-size: 1rem;
  }
`;

export const SizeInputs = styled.div`
  display: flex;

  input {
    width: 40%;
    padding: 0.2em;
    border: 1px solid var(--mainBlack);
    border-radius: 0.3em;
    margin-right: 0.3em;
  }
`;

export const SingleExtra = styled.div`
  label {
    display: inline-block;
    font-size: 0.8rem;
    margin-left: 0.5em;
  }
  input {
    width: auto;
  }
`;
