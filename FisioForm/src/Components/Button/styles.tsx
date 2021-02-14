import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #17AAB2;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  font-family: 'Nunito-ExtraBold';
  color: #FFFFFF;
  font-size: 20px;
`;
