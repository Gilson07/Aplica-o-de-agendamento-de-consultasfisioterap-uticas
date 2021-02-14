import styled from 'styled-components/native';
import {Image} from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 20px;
`;

export const LogoContainer = styled.View`
  align-items: center;
  margin-bottom: 40px;
`;

export const Logo = styled(Image)``;

export const ImportantInformationTextBold = styled.Text`
  font-family: 'Nunito-Bold';
  color: #46606C;
  font-size: 20px;
  text-align: left;
`;

export const ImportantInformationText = styled.Text`
  font-family: 'Nunito-Regular';
  color: #70828A;
  font-size: 17px;
  text-align: left;
`;

export const Options = styled.TouchableOpacity`
  width: 47%;
  height: 160px;
  flex-direction: row;
  background: #FFFFFF;
  border-radius: 20px;
  margin-right: 5px;
  margin-left: 5px;
  align-items: center;
  justify-content: center;
  elevation: 1;
`;

export const OptionsFirst = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const OptionsSecond = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;