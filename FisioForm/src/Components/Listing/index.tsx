import React from 'react';
import { Linking, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ComponentStars from '../Stars';

import Whatsapp from '../../assets/icons/whatsapp.svg';

import {
  Container,
  FirstColumn,
  Image,
  SecondColumn,
  Name,
  Specialty,
  Date,
  SecondColumnInformation,
  WhatsappContainer,
  WhatsappButton,
  SecondColumnInformationItem,
  SecondColumnButton,
  ButtonContainer,
  Button,
  ButtonText
} from './styles';

interface ListingProps {
  name: string;
  specialty: string;
  evaluation: number;
  showDate: boolean;
  showEvaluation: boolean;
  date: string;
  showWhatsapp: boolean;
  showButton: boolean;
}

function getInTouch() {
  Linking.openURL(`whatsapp://send?phone=={+5531998781566}`);
}

const Listing: React.FC<ListingProps> = ({name, specialty, showDate, date, showEvaluation, evaluation, showWhatsapp, showButton}) => {
  const navigation = useNavigation();

  function nameFilter(){
    if (name === "Gabriel") {
      return <Image source={require('../../assets/images/felipe.jpg')}/>
    } else if(name === "Gustavo"){
      return <Image source={require('../../assets/images/gustavo.png')}/>
    } else if(name === "Mariana"){
      return <Image source={require('../../assets/images/maria.png')}/>
    }
  }

  return (
    <Container>
      <FirstColumn>
      <View>{nameFilter()}</View>
      </FirstColumn>
      <SecondColumn>
        <Name>{name}</Name>
        <Specialty>{specialty}</Specialty>
        {showDate && <Date>{date}</Date>}
        <SecondColumnInformation>
          <SecondColumnInformationItem>
              {showEvaluation ? ( 
                <ComponentStars evaluation={evaluation}/>
              ) : null}
            </SecondColumnInformationItem>
            <SecondColumnInformationItem>
              {showWhatsapp ? (
                  <WhatsappContainer>
                    <WhatsappButton onPress={getInTouch}>
                      <Whatsapp width="20" height="20"/>
                    </WhatsappButton>
                  </WhatsappContainer>
                ) : null}
            </SecondColumnInformationItem>
        </SecondColumnInformation>
        <SecondColumnButton>
          {
            showButton ? (
              <ButtonContainer>
                <Button>
                  <ButtonText>Ver perfil</ButtonText>
                </Button>
              </ButtonContainer>
            ) : null
          }
        </SecondColumnButton>
      </SecondColumn>
    </Container>
  );
}

export default Listing; 