import React from 'react';

import ComponentHeader from '../../Components/Header';

import {
  Container,
  DescriptionText
} from './styles';

const QueryFisioForm: React.FC = () => {
  
  return (
    <Container>
      <ComponentHeader title="FisioForm"/>
      <DescriptionText>
        O FisioForm foi desenvolvido por Gilson Soares Sales, orientado pelo professor Flávio Augusto de Freitas durante o curso de Pós Graduação em Desenvolvimento Web e Mobile, pelo Instituto Federal do Sudeste de Minas Gerais - Campus Rio Pomba-MG. {"\n\n"}
        A sua criação tem como proposito facilitar a realização das atividades tanto para os usuários quanto para os profissionais.
      </DescriptionText>
    </Container>
  );
}

export default QueryFisioForm;