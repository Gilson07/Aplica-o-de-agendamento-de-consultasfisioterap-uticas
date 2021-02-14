import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-family: 'Nunito-Bold';
  color: #46606C;
  font-size: 32px;
  margin-top: 48px;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #70828A;
  font-family: 'Nunito-SemiBold';
  margin-top: 16px;
`;

export const OkButton = styled(RectButton)`
  background-color: #17AAB2;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  padding: 12px 24px;
`;

export const OkButtonText = styled.Text`
  font-family: 'Nunito-ExtraBold';
  font-size: 15px;
  color: #FFFFFF;
`;