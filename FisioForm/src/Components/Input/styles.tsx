import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #FFFFFF;
  border-radius: 20px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: 'Nunito-ExtraBold';
  font-size: 20px;
  color: #70828A;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;