import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container,
  Icon,
  TextInput
} from './styles';

interface InputFieldProps extends TextInputProps {
  textInput: string;
}

const InputField: React.FC<InputFieldProps> = ({textInput}) => {

  return (
    <Container>
      <Icon name="search"/>
      <TextInput 
        placeholderTextColor="#A8C2CD"
        keyboardAppearance="dark"
        placeholder={textInput}
      />
    </Container>
  );
}

export default InputField;