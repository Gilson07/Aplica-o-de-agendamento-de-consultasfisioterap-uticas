import React, {useState} from 'react';
import {ScrollView, FlatList, TouchableOpacity, RefreshControl} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ComponentHeader from '../../Components/Header';
import ComponentDescription from '../../Components/Description';
import ComponentMedicalAppointment from '../../Components/InputField';
import ComponentListing from '../../Components/Listing';

import {
  Container
} from './styles';

const Specialist: React.FC = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [experts, setExperts] = useState([
    {
      id: "1",
      name: "Gabriel",
      specialty: "Fisioterapeuta",
      evaluation: 3.3,
      date: "12/10/1990"
    },
    {
      id: "2",
      name: "Gustavo",
      specialty: "Educador Físico",
      evaluation: 4.5,
      date: "12/10/1990"
    },
    {
      id: "3",
      name: "Mariana",
      specialty: "Fisioterapeuta",
      evaluation: 1.5,
      date: "12/10/1990"
    }
  ]);

  const onRefresh = () => {
    setRefreshing(false);
    // dou um get para pegar os dados novamente
  }

  return (
    <Container>
      <ComponentHeader title="Especialistas"/>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>

        <ComponentDescription title="Fique a vontade para agendar as suas consultas."/>

        <ComponentMedicalAppointment textInput="Busque pelo especialista"/>

        <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={1}
            scrollEnabled={true}
            keyExtractor={item => item.id}
            data={experts}
            onEndReachedThreshold={0.1} 
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('OccupationalProfile')}>
                <ComponentListing name={item.name} specialty={item.specialty} showDate={false} date={item.date} showEvaluation={true} evaluation={item.evaluation} showWhatsapp={false} showButton={true}/>
              </TouchableOpacity>
            )}
          ></FlatList>
        </ScrollView>
    </Container>
  );
}

export default Specialist;