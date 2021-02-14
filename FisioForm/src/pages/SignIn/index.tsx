import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ComponentInput from '../../Components/Input';
import ComponentButton from '../../Components/Button';

import LogoImg from '../../assets/images/logo.png';

import {
  Container, 
  Logo, 
  ForgotPassword, 
  ForgotPasswordText, 
  CreateAccountButton, 
  CreateAccountText, 
  CreateAccountTextButton
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{flex: 1}} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}
      >
        <Container>
          <Logo source={LogoImg}/>

          <ComponentInput name="email" icon="mail" placeholder="Digite seu e-mail"/>
          <ComponentInput name="password" icon="lock" placeholder="Digite sua senha"/>

          <ForgotPassword onPress={() => {}}>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>

          <ComponentButton onPress={() => navigation.navigate('Tab')}>Entrar</ComponentButton>

          <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
            <CreateAccountText>
              Não é cadastrado? {''}
              <CreateAccountTextButton>Clique aqui</CreateAccountTextButton>
            </CreateAccountText>
          </CreateAccountButton>

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignIn;