import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
`;

export const HorizontalLine = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: #17AAB2;
`;

export const QueryContainer = styled.View`
  margin-top: 10px;
`;

export const Options = styled.TouchableOpacity``;

export const OptionsItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin: 15px 0 15px 0;
`;

export const OptionsFirstColumn = styled.View``;

export const Title = styled.Text`
  font-family: 'Nunito-SemiBold';
  font-size: 24px;
  color: #46606C;
`;

export const OptionsSecondColumn = styled.View``;

export const NextIcon = styled(FeatherIcon)`
  font-size: 30px;
  color: #17AAB2;
`;