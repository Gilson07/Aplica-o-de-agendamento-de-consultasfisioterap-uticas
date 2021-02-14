import React from 'react';
import {ScrollView, BackHandler, Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ComponentHeader from '../../Components/Header';
import ComponentDescription from '../../Components/Description';
import ComponentOptions from '../../Components/Options';

import {
  Container,
  OptionsFirst,
  Options
} from './styles';

const Modality: React.FC = () => {
  const navigation = useNavigation();
  
  return (
    <Container>
      <ComponentHeader title="Modalidades"/>
      <ComponentDescription title="Possuímos esses dois tipos de modalidades."/>
      <OptionsFirst>
        <Options>
          <ComponentOptions title="Presencial"/>
        </Options>
        <Options>
          <ComponentOptions title="Online"/>
        </Options>
      </OptionsFirst>
    </Container>
  );
}

export default Modality;