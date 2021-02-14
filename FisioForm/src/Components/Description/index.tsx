import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container,
  DescriptionText
} from './styles';

interface DescriptionProps extends Text {
  title: string;
}

const Description: React.FC<DescriptionProps> = ({title}) => {

  return (
    <Container>
      <DescriptionText>
        {title}
      </DescriptionText>
    </Container>
  );
}

export default Description;