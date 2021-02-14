import React from 'react';

import ComponentHeader from '../../Components/Header';

import {
  Container,
  DescriptionText
} from './styles';

const QueryAvailableCities: React.FC = () => {
  
  return (
    <Container>
      <ComponentHeader title="Cidades disponíveis"/>
      <DescriptionText>
        Atualmente o FisioForm encontra-se somente na cidade de Rio Pomba-MG. Porém, em breve estará disponíveis em todas as cidades do Brasil.
      </DescriptionText>
    </Container>
  );
}

export default QueryAvailableCities;