import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  height: 120px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  background: #FFFFFF;
  padding: 15px 20px;
  border-radius: 20px;
`;

export const FirstColumn = styled.View`
  margin-right: 10px;
`;

export const Image = styled.Image`
  width: 60px;
  height: 70px;
`;

export const SecondColumn = styled.View`
  justify-content: center;
`;

export const WhatsappContainer = styled.View``;

export const WhatsappButton = styled.TouchableOpacity``;

export const Name = styled.Text`
  font-family: 'Nunito-SemiBold';
  font-size: 24px;
  color: #46606C;
`;

export const Specialty = styled.Text`
  font-family: 'Nunito-SemiBold';
  font-size: 15px;
  color: #70828A;
`;

export const Date = styled.Text`
  font-family: 'Nunito-SemiBold';
  font-size: 15px;
  color: #70828A;
`;

export const SecondColumnInformation = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SecondColumnInformationItem = styled.Text``;

export const SecondColumnButton = styled.View``;

export const ContainerButton = styled.View`
  width: 95px;
  height: 25px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const Button = styled(RectButton)`
  width: 95px; 
  height: 25px;
  background: #17AAB2;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  font-family: 'Nunito-ExtraBold';
  color: #FFFFFF;
  font-size: 15px;
`;