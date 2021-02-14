import React from 'react';

import ComponentHeader from '../../Components/Header';

import {
  Container,
  DescriptionText
} from './styles';

const QueryPayment: React.FC = () => {
  
  return (
    <Container>
      <ComponentHeader title="Pagamento"/>
      <DescriptionText>
        Os pagamentos são gerenciados pelas empresas prestadoras de serviço e são efetuados na hora da atividade podendo ser por boleto, cartão crédito/débito ou transferência bancária. {"\n\n"}
        Em caso de dúvida, entre em contato com o profissional.
      </DescriptionText>
    </Container>
  );
}

export default QueryPayment;