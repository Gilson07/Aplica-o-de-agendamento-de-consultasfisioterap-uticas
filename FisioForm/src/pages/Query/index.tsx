import React from 'react';
import {ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ComponentHeader from '../../Components/Header';
import ComponentDescription from '../../Components/Description';

import {
  Container,
  HorizontalLine,
  QueryContainer,
  Options,
  OptionsItem,
  OptionsFirstColumn,
  Title,
  OptionsSecondColumn,
  NextIcon
} from './styles';

const Query: React.FC = () => {
  const navigation = useNavigation();

  function handleQueryPayment(){
    navigation.navigate('QueryPayment');
  }

  function handleQueryFisioForm(){
    navigation.navigate('QueryFisioForm');
  }
  
  function handleQueryAvailableCities(){
    navigation.navigate('QueryAvailableCities');
  }

  return (
    <Container>
      <ComponentHeader title="Dúvidas"/>
      <ComponentDescription title="Dúvidas mais frequentes em relação ao FisioForm."/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <HorizontalLine />
        <QueryContainer>
          <Options onPress={handleQueryFisioForm}>
            <OptionsItem>
              <OptionsFirstColumn>
                <Title>Sobre o FisioForm</Title>
              </OptionsFirstColumn>
              <OptionsSecondColumn>
                <NextIcon 
                      name="chevron-right"
                />
              </OptionsSecondColumn>
            </OptionsItem>
            <HorizontalLine />
          </Options>
          <Options onPress={handleQueryPayment}>
            <OptionsItem>
              <OptionsFirstColumn>
                <Title>Sobre o pagamento</Title>
              </OptionsFirstColumn>
              <OptionsSecondColumn>
                <NextIcon 
                      name="chevron-right"
                />
              </OptionsSecondColumn>
            </OptionsItem>
            <HorizontalLine />
          </Options>
          <Options onPress={handleQueryAvailableCities}>
            <OptionsItem>
              <OptionsFirstColumn>
                <Title>Cidades disponíveis</Title>
              </OptionsFirstColumn>
              <OptionsSecondColumn>
                <NextIcon 
                      name="chevron-right"
                />
              </OptionsSecondColumn>
            </OptionsItem>
            <HorizontalLine />
          </Options>
        </QueryContainer>
      </ScrollView>
    </Container>
  );
}

export default Query;