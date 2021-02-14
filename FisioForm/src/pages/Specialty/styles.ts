import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const OptionsFirst = styled.View`
  height: 160px;
  flex-direction: row;
  margin-bottom: 10px;
  margin-top: 20px;
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

export const OptionsSecond = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;