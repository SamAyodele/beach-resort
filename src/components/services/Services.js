import React from 'react';

import { servicesArr } from '../../constants/service';
import {
  ServicesContainer,
  ServicesWrapper,
  Service,
} from './ServicesElements';
import Title from '../title/Title';

const Services = () => {
  return (
    <ServicesContainer>
      <Title titleName='services' />
      <ServicesWrapper>
        {servicesArr.map((service, index) => (
          <Service key={index}>
            <span>{service.icon}</span>
            <h6>{service.title}</h6>
            <p>{service.info}</p>
          </Service>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
