import React from 'react';
import {ScrollView, BackHandler, Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ComponentHeader from '../../Components/Header';
import ComponentDescription from '../../Components/Description';

import {
  Container,
  ProfileContainer,
  Profile,
  FirstColumn,
  UserImg,
  SecondColumn,
  Title,
  Caption,
  HorizontalLine,
  OptionsContainer,
  Options,
  OptionsItem,
  OptionsFirstColumn,
  OptionsSecondColumn,
  NextIcon,
} from './styles';

const User: React.FC = () => {
  const navigation = useNavigation();

  function getInTouch() {
    Linking.openURL(`whatsapp://send?phone=={+5531998781566}`);
  }

  function getOut() {
    BackHandler.exitApp();
  }
  
  return (
    <Container>
      <ComponentHeader title="Configuração"/>
      <ComponentDescription title="Ajuste o aplicativo de acordo com suas necessidades."/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileContainer>
          <Profile>
            <FirstColumn>
              <UserImg source={require("../../assets/images/ronaldinho.jpg")} />
            </FirstColumn>
            <SecondColumn>
              <Title>Pedro Augusto</Title>
              <Caption>Editar perfil</Caption>
            </SecondColumn>
          </Profile>
          <HorizontalLine />
          <OptionsContainer>
            <Options>
              <OptionsItem>
                <OptionsFirstColumn>
                  <Title>Endereços</Title>
                  <Caption>Editar os endereços</Caption>
                </OptionsFirstColumn>
                <OptionsSecondColumn>
                  <NextIcon 
                    name="chevron-right"
                  />
                </OptionsSecondColumn>
              </OptionsItem>
              <HorizontalLine />
            </Options>
            <Options>
              <OptionsItem onPress={getInTouch}>
                <OptionsFirstColumn>
                  <Title>Fale conosco</Title>
                  <Caption>Entre em contato com o FisioForm</Caption>
                </OptionsFirstColumn>
                <OptionsSecondColumn>
                  <NextIcon 
                    name="chevron-right"
                  />
                </OptionsSecondColumn>
              </OptionsItem>
              <HorizontalLine />
            </Options>
            <Options>
              <OptionsItem>
                <OptionsFirstColumn>
                  <Title>Dados pessoais</Title>
                  <Caption>Altere seus dados</Caption>
                </OptionsFirstColumn>
                <OptionsSecondColumn>
                  <NextIcon 
                    name="chevron-right"
                  />
                </OptionsSecondColumn>
              </OptionsItem>
              <HorizontalLine />
            </Options>
            <Options>
              <OptionsItem>
                <OptionsFirstColumn>
                  <Title>Sobre o FisioForm</Title>
                  <Caption>Informações importantes</Caption>
                </OptionsFirstColumn>
                <OptionsSecondColumn>
                  <NextIcon 
                    name="chevron-right"
                  />
                </OptionsSecondColumn>
              </OptionsItem>
              <HorizontalLine />
            </Options>
            <Options>
              <OptionsItem onPress={getOut}>
                <OptionsFirstColumn>
                  <Title>Sair</Title>
                  <Caption>Sair do aplicativo</Caption>
                </OptionsFirstColumn>
                <OptionsSecondColumn>
                  <NextIcon 
                    name="chevron-right"
                  />
                </OptionsSecondColumn>
              </OptionsItem>
            </Options>
          </OptionsContainer>
        </ProfileContainer>
      </ScrollView>
    </Container>
  );
}

export default User;