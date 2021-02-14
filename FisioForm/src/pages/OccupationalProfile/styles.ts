import styled from 'styled-components/native';
import {Platform} from 'react-native';

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

export const ProfileListing = styled.View`
  padding: 0 20px;
`;

export const ProfileListingContainer = styled.View``;

export const Hourly = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const FirstColumn = styled.View``;

export const Specialty = styled.Text`
  font-family: 'Nunito-SemiBold';
  font-size: 24px;
  color: #46606C;
`;

export const ValueMinuto = styled.View`
  flex-direction: row;
`;

export const Price = styled.Text`
  font-family: 'Nunito-SemiBold';
  font-size: 15px;
  color: #70828A;
`;

export const Time = styled.Text`
  font-family: 'Nunito-SemiBold';
  font-size: 15px;
  color: #70828A;
`;

export const SecondColumn = styled.View`
  background-color: #17AAB2;
  border-radius: 20px;
  width: 80px;
  height: 35px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Nunito-ExtraBold';
  font-size: 15px;
  color: #FFFFFF;
`;
