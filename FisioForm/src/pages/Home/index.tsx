import React from 'react';
import { useNavigation } from '@react-navigation/native';

import LogoImg from '../../assets/images/logo.png';

import ComponentOptions from '../../Components/Options';

import {
  Container,
  LogoContainer,
  Logo,
  ImportantInformationTextBold,
  ImportantInformationText,
  Options,
  OptionsFirst,
  OptionsSecond
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  function handleSpecialty(){
    navigation.navigate('Specialty');
  }

  function handleSpecialist(){
    navigation.navigate('Specialist');
  }

  function Modality(){
    navigation.navigate('Modality');
  }

  function handleQuery(){
    navigation.navigate('Query');
  }

  return (
    <Container>
    <LogoContainer>
      <Logo source={LogoImg} resizeMode="contain"/>
    </LogoContainer>

    <ImportantInformationTextBold>
      Olá Pedro, seja bem vindo!
    </ImportantInformationTextBold>

    <ImportantInformationText>
      Fique a vontade para agendar as suas consultas.
    </ImportantInformationText>
      <OptionsFirst>
        <Options onPress={handleSpecialty}>
          <ComponentOptions title="Especialidade"/>
        </Options>
        <Options onPress={handleSpecialist}>
          <ComponentOptions title="Especialistas"/>
        </Options>
      </OptionsFirst>
      <OptionsSecond>
      <Options onPress={Modality}>
          <ComponentOptions title="Modalidade"/>
        </Options>
        <Options onPress={handleQuery}>
          <ComponentOptions title="Dúvidas"/>
        </Options>
      </OptionsSecond>
    </Container>
  );
}

export default Home;