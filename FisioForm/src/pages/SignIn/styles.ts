import styled from 'styled-components/native';
import {Image, Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const Logo = styled(Image)`
  margin-bottom: 40px;
`;

export const ForgotPassword = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
  font-family: 'Nunito-ExtraBold';
  color: #17AAB2;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  margin-top: 20px
`; 

export const CreateAccountText = styled.Text`
  font-family: 'Nunito-ExtraBold';
  color: #70828A;
  font-size: 15px;
`;

export const CreateAccountTextButton = styled.Text`
  font-family: 'Nunito-ExtraBold';
  color: #17AAB2;
  font-size: 16px;
`;