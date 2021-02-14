import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const Form = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ServiceTerms = styled.View`
  margin-top: 10px;
  align-items: center;
`;

export const ServiceTermsText = styled.Text`
  font-family: 'Nunito-ExtraBold';
  font-size: 15px;
  color: #70828A;
`;

export const ImportantInformation = styled.TouchableOpacity`
  padding: 0 30px 30px 30px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ImportantInformationText = styled.Text`
  font-family: 'Nunito-ExtraBold';
  color: #70828A;
  font-size: 15px;
  text-align: center;
`;

export const ImportantInformationTextBold = styled.Text`
  font-family: 'Nunito-ExtraBold';
  color: #17AAB2;
  font-size: 15px;
`;