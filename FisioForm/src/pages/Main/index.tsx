import React from 'react';
import { useNavigation } from '@react-navigation/native';

import LogoImg from '../../assets/images/logo.png';

import Button from '../../Components/Button';

import {
  Container,
  Logo,
  ImportantInformationTextBold,
  ImportantInformationText
} from './styles';


const Main: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
    <Logo source={LogoImg}/>

    <ImportantInformationTextBold>
      Ficou muito fácil agendar a sua consulta!
    </ImportantInformationTextBold>

      <ImportantInformationText>
        Aqui você encontra profissionais competentes.
      </ImportantInformationText>

      <Button onPress={() => navigation.navigate('SignIn')}>Entrar</Button>

      <Button onPress={() => navigation.navigate('SignUp')}>Cadastrar</Button>
    
    </Container>
  );
}

export default Main;