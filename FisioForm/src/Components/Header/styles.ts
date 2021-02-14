import styled from 'styled-components/native';
import { BorderlessButton } from "react-native-gesture-handler";
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  margin: 30px 0 15px 0;
  flex-direction: row;
`;

export const HeaderLeft = styled(BorderlessButton)`
  align-items: center;
  width: 20%;
`;

export const HeaderIcon = styled(FeatherIcon)`
  font-size: 30px;
  color: #17AAB2;
`;

export const HeaderCenter = styled.View`
  width: 60%;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 20px;
  color: #46606C;
`;

export const HeaderRight = styled.View`
  width: 20%;
`;