import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
`;

export const ProfileContainer = styled.View`
  background: #FFFFFF;
  border-radius: 20px;
  border-width: 0.5px;
  border-color: #17AAB2;
`;

export const Profile = styled.View`
  flex-direction: row;
  padding: 20px 20px;
`;

export const FirstColumn = styled.View``;

export const UserImg = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 10px;
`;

export const SecondColumn = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-family: 'Nunito-SemiBold';
  font-size: 24px;
  color: #46606C;
`;

export const Caption = styled.Text`
  font-family: 'Nunito-SemiBold';
  font-size: 15px;
  color: #70828A;
`;

export const HorizontalLine = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: #17AAB2;
`;

export const OptionsContainer = styled.View``;

export const Options = styled.View`
  padding: 0 20px;
  margin: 10px 0 10px 0;
`;

export const OptionsItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const OptionsFirstColumn = styled.View``;

export const OptionsSecondColumn = styled.View``;

export const NextIcon = styled(FeatherIcon)`
  font-size: 30px;
  color: #17AAB2;
`;