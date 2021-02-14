import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container, 
  TextInput, 
  Icon
} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => (
   <Container>
     <Icon name={icon} size={20} color="#17AAB2"/>

     <TextInput 
      placeholderTextColor="#A8C2CD"
      keyboardAppearance="dark"
      {...rest}>

     </TextInput>
   </Container>
);

export default Input;