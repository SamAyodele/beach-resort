import React from 'react';

import { SectionTitle } from './TitleElements';

const Title = ({ titleName }) => {
  return (
    <SectionTitle>
      <h4>{titleName}</h4>
      <div></div>
    </SectionTitle>
  );
};

export default Title;
