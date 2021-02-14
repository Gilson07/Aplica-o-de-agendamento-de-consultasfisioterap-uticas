import React from 'react';
import {TextInputProps} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  HeaderLeft,
  HeaderIcon,
  HeaderCenter,
  HeaderTitle,
  HeaderRight
} from './styles';

interface HeaderProps extends TextInputProps{
  title: string
}

const Header: React.FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <HeaderLeft onPress={() => navigation.goBack()}>
        <HeaderIcon 
          name="arrow-left"
        />
      </HeaderLeft>  
      <HeaderCenter> 
        <HeaderTitle>
          {title}
        </HeaderTitle>
      </HeaderCenter>
      <HeaderRight />
    </Container>
  );
}

export default Header; 