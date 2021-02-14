import styled from 'styled-components/native';
import {Image} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Logo = styled(Image)``;

export const ImportantInformationTextBold = styled.Text`
  font-family: 'Nunito-Bold';
  color: #46606C;
  font-size: 20px;
  text-align: center;
  margin-top: 40px;
`;

export const ImportantInformationText = styled.Text`
  font-family: 'Nunito-Regular';
  color: #70828A;
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;