import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import LogoImg from '../../assets/imagens/logo.png';

import ComponentHeader from '../../Components/Header';

import {
  Container,
  Form,
  ServiceTerms,
  ServiceTermsText,
  ImportantInformation,
  ImportantInformationText,
  ImportantInformationTextBold,
} from './styles';

const SignUp: React.FC = () => {

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
          <ComponentHeader title="Cadastre-se"/>

          <Form>
            <Input name="name" icon="user" placeholder="Nome completo"/>
            <Input name="name" icon="mail" placeholder="Cadastre um e-mail"/>
            <Input name="password" icon="lock" placeholder="Cadastre uma senha"/>
            <Input name="password" icon="lock" placeholder="Confirme a senha"/>

            <ServiceTerms>
              <ServiceTermsText>
                Aceito os termos de serviço
              </ServiceTermsText>
            </ServiceTerms>
            <Button onPress={() => {console.log('Deu')}}>Cadastrar</Button>
          </Form>
        </Container>

        <ImportantInformation onPress={() => {}}>
          <ImportantInformationText>
            Ao criar o cadastro você concorda com os {""}
            <ImportantInformationTextBold>termos de serviço</ImportantInformationTextBold>
          </ImportantInformationText>
        </ImportantInformation>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUp;