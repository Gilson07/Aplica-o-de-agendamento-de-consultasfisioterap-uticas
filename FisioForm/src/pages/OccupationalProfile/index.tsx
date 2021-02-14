import React, {useState} from 'react';
import {FlatList, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ComponentHeader from '../../Components/Header';
import ComponentDescription from '../../Components/Description';
import ComponentMedicalAppointment from '../../Components/InputField';
import ComponentListing from '../../Components/Listing';

import {
  Container,
  ProfileContainer,
  ProfileListing,
  ProfileListingContainer,
  Hourly,
  FirstColumn,
  Specialty,
  ValueMinuto,
  Price,
  Time,
  SecondColumn,
  ButtonText
} from './styles';

const OccupationalProfile: React.FC = () => {
  const navigation = useNavigation();

  const [experts, setExperts] = useState([
    {
      id: "1",
      name: "Felipe Prado",
      specialty: "Fisioterapeuta",
      evaluation: 3.3,
      date: "12/10/1990"
    }
  ]);
  const [hourly, setHourly] = useState([
    {
      id: "1",
      specialty: "Fisioterapeuta",
      price: "50,00",
      time: "50"
    },
    {
      id: "2",
      specialty: "Pilates",
      price: "40,00",
      time: "50"
    }
  ]);
  
  function handleScheduling(){
    navigation.navigate('Scheduling');
  }

  return (
    <Container>
      <ComponentHeader title="Perfil do profissional"/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <ComponentDescription title="Essas são todas as suas consultas em um determinado período."/>
      <ComponentMedicalAppointment textInput="Busque pela especialidade"/>
        <ProfileContainer>
          {
            experts.map(item => (
              <ComponentListing key={item.id} name={item.name} specialty={item.specialty} showDate={false} date={item.date} showEvaluation={true} evaluation={item.evaluation} showWhatsapp={true} showButton={false}/>
            ))
          }
          <ProfileListing>
          <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={1}
              scrollEnabled={true}
              keyExtractor={item => item.id}
              data={hourly}
              onEndReachedThreshold={0.1} 
              renderItem={({ item }) => (
                <ProfileListingContainer>
                  <Hourly>
                    <FirstColumn>
                      <Specialty>{item.specialty}</Specialty>
                      <ValueMinuto>
                        <Price>{"R$ "+item.price+" - "}</Price>
                        <Time>{item.time+" min"}</Time>
                      </ValueMinuto>
                    </FirstColumn>
                    <SecondColumn>
                    <TouchableOpacity onPress={handleScheduling}>
                      <ButtonText>Agendar</ButtonText>
                    </TouchableOpacity>
                
                    </SecondColumn>
                  </Hourly>
                </ProfileListingContainer>
              )}
            ></FlatList>
            </ProfileListing>
        </ProfileContainer>
      </ScrollView>
    </Container>
  );
}

export default OccupationalProfile;