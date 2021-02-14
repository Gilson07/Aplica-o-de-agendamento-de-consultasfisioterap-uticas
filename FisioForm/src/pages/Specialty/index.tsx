import React from 'react';
import { useNavigation } from '@react-navigation/native';

import ComponentHeader from '../../Components/Header';
import ComponentDescription from '../../Components/Description';
import ComponentOptions from '../../Components/Options';

import {
  Container,
  OptionsFirst,
  Options,
  OptionsSecond
} from './styles';

const Specialty: React.FC = () => {
  const navigation = useNavigation();
  
  return (
    <Container>
      <ComponentHeader title="Especialidades"/>
      <ComponentDescription title="Essas são as especialidades disponíveis no momento."/>
      <OptionsFirst>
        <Options>
          <ComponentOptions title="Pilates"/>
        </Options>
        <Options>
          <ComponentOptions title="Fisioterapia"/>
        </Options>
      </OptionsFirst>
      <OptionsSecond>
        <Options>
          <ComponentOptions title="Treinamento funcional"/>
        </Options>
      </OptionsSecond>
    </Container>
  );
}

export default Specialty;