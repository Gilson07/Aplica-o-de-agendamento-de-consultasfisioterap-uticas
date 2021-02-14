import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: #FFFFFF;
  padding: 0 20px;
  margin-bottom: 20px;
`;

export const Icon = styled(FeatherIcon)`
  font-size: 20px;
  color: #17AAB2;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: 'Nunito-Regular';
  font-size: 17px;
  color: #70828A;
`;