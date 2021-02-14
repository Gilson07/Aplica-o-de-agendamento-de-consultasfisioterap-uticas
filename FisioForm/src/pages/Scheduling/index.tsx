import React, {useCallback, useState} from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AwesomeAlert from 'react-native-awesome-alerts';

import ComponentHeader from '../../Components/Header';
import ComponentDescription from '../../Components/Description';

import {
  Container,
  Calendar,
  Title,
  OpenDatePickerButton,
  OpenDatePickerButtonText,
  Schedule,
  Section,
  SectionTitle,
  SectionContent,
  Hour,
  HourText,
  Modality,
  ModalityButtonPresential,
  ModalityButtonOnline,
  ModalityButtonText,
  CreateAppointmentButton,
  CreateAppointmentButtonText
} from './styles';

const OccupationalProfile: React.FC = () => {
  const navigation = useNavigation();

  const [morningAvailability, setMorningAvailability] = useState([
    {
      id: "1",
      hour: "08:00"
    },
    {
      id: "2",
      hour: "09:00"
    },
    {
      id: "3",
      hour: "10:00"
    }
    ,
    {
      id: "4",
      hour: "10:30"
    }
    , 
    {
      id: "5",
      hour: "11:3 0"
    }
  ]);
  const [afternoonAvailability, setAfternoonAvailability] = useState([
    {
      id: "1",
      hour: "13:00"
    },
    {
      id: "2",
      hour: "15:00"
    },
    {
      id: "3",
      hour: "17:00"
    }
  ]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedModalityPresential, setSelectedModalityPresential] = useState(true);
  const [selectedModalityOnline, setSelectedModalityOnline] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleToggleDatePicker = useCallback(() => {
    setShowDatePicker((state) => !state);
  }, []);

  const handleDateChanged = useCallback((event: any, date: Date | undefined) => {
    if(Platform.OS === 'android'){
      setShowDatePicker(false);
    }
    if(date){
      setSelectedDate(date);
    }
  }, []);

  const handleSelectedHour = useCallback((hour: string) => {
    setSelectedHour(hour);
  }, []);

  const handleSelecteModalityPresential = useCallback(() => {
    setSelectedModalityPresential(!selectedModalityPresential);
    setSelectedModalityOnline(!selectedModalityOnline);
  }, []);

  const handleSelecteModalityOnline = useCallback(() => {
    setSelectedModalityOnline(!selectedModalityOnline);
    setSelectedModalityPresential(!selectedModalityPresential);
  }, []);

  const handleShowAlert = useCallback(() => {
    setShowAlert(true);
  }, []);

  const handleHideAlert = useCallback(() => {
    setShowAlert(false);
  }, []);

  const handleAppointmentCreated = useCallback(() => {
    handleHideAlert();
    navigation.navigate("AppointmentCreated");
  }, []);

  return (
    <Container>
      <ComponentHeader title="Agendamento"/>
      <ComponentDescription title="Escolha o dia da sua consulta e veja quais os horários disponíveis do profissional."/>
      
        <Calendar>
          <Title>Escolha a data</Title>

          <OpenDatePickerButton onPress={handleToggleDatePicker}>
            <OpenDatePickerButtonText>
              Selecionar outra data
            </OpenDatePickerButtonText>
          </OpenDatePickerButton>

          {showDatePicker && (
            <DateTimePicker 
              mode="date" 
              display="calendar" 
              onChange={handleDateChanged}
              value={selectedDate}
            />
          )}
        </Calendar>

        <Schedule>
          <Title>Escolha o horário</Title>

          <Section>
            <SectionTitle>Manhã</SectionTitle>
            <SectionContent>
            {
              morningAvailability.map((item) => (
                <Hour selected={selectedHour === item.hour} key={item.id} onPress={() => handleSelectedHour(item.hour)}>
                  <HourText>{item.hour}</HourText> 
                </Hour>
              ))
            }
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Tarde</SectionTitle>

            <SectionContent>
              {
                afternoonAvailability.map((item) => (
                  <Hour selected={selectedHour === item.hour} key={item.id} onPress={() => handleSelectedHour(item.hour)}>
                    <HourText>{item.hour}</HourText>
                  </Hour>
                ))
              }
            </SectionContent>
          </Section>
        </Schedule>

        <Title>Escolha o modalidade</Title>
        <Modality>
          <ModalityButtonPresential a={selectedModalityPresential} onPress={() => handleSelecteModalityPresential()}>
            <ModalityButtonText>Presencial</ModalityButtonText>
          </ModalityButtonPresential> 
          <ModalityButtonOnline aa={selectedModalityOnline} onPress={() => handleSelecteModalityOnline()}>
            <ModalityButtonText>Online</ModalityButtonText>
          </ModalityButtonOnline>
        </Modality>

        <CreateAppointmentButton onPress={handleShowAlert}>
          <CreateAppointmentButtonText>Agendar</CreateAppointmentButtonText>
        </CreateAppointmentButton>

        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Atenção"
          message="Deseja confirmar este horário?"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Não"
          confirmText="Sim"
          confirmButtonColor="#17AAB2"
          onCancelPressed={handleHideAlert}
          onConfirmPressed={handleAppointmentCreated}
          contentStyle={{height: 100, width: 300}}
          cancelButtonStyle={{width: 140, alignItems: 'center'}}
          confirmButtonStyle={{width: 140, alignItems: 'center'}}
          titleStyle={{fontFamily: 'Nunito-Bold', fontSize: 20}}
          messageStyle={{fontFamily: 'Nunito-Bold', fontSize: 14}}
          cancelButtonTextStyle={{fontFamily: 'Nunito-Bold', fontSize: 14}}
          confirmButtonTextStyle={{fontFamily: 'Nunito-Bold', fontSize: 14}}
        />
    </Container>
  );
}

export default OccupationalProfile;