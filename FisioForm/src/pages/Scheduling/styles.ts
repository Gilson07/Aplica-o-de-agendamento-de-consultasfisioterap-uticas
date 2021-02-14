import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface HourProps {
  selected: boolean;
}

interface ModalityPropsPresential {
  a: boolean;
}

interface ModalityPropsOnline {
  aa: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const Calendar = styled.View``;

export const Title = styled.Text`
  font-family: 'Nunito-Bold';
  color: #46606C;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const OpenDatePickerButton = styled(RectButton)`
  height: 46px;
  background-color: #17AAB2;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const OpenDatePickerButtonText = styled.Text`
  font-family: 'Nunito-ExtraBold';
  font-size: 15px;
  color: #FFFFFF;
`;
 
export const Schedule = styled.View`
  padding: 24px 0 16px;
`;

export const Section = styled.View`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  color: #70828A;
  font-family: 'Nunito-SemiBold';
  margin: 0 0 12px;
`;

export const SectionContent = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 0 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Hour = styled(RectButton)<HourProps>`
  padding: 12px;
  background-color: ${(props) => (props.selected ? "#17AAB2" : "#70828A")};
  border-radius: 10px;
  margin-right: 8px;
`;

export const HourText = styled.Text`
  color: #f4ede8;
  font-family: 'Nunito-Bold';
  font-size: 16px;
`;

export const Modality = styled.View`
  flex-direction: row;
`;

export const ModalityButtonPresential = styled(RectButton)<ModalityPropsPresential>`
  padding: 12px;
  background-color: ${(props) => (props.a ? "#17AAB2" : "#70828A")};
  border-radius: 10px;
  margin-right: 8px;
`;

export const ModalityButtonOnline = styled(RectButton)<ModalityPropsOnline>`
  padding: 12px;
  background-color: ${(props) => (props.aa ? "#17AAB2" : "#70828A")};
  border-radius: 10px;
  margin-right: 8px;
`;

export const ModalityButtonText = styled.Text`
  color: #f4ede8;
  font-family: 'Nunito-Bold';
  font-size: 16px;
`;

export const CreateAppointmentButton = styled(RectButton)`
  height: 46px;
  background-color: #17AAB2;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const CreateAppointmentButtonText = styled.Text`
  font-family: 'Nunito-ExtraBold';
  font-size: 15px;
  color: #FFFFFF;
`;