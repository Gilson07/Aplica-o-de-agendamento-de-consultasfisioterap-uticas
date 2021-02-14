import React from 'react';
import {TextInputProps} from 'react-native';

import Especialidade from '../../assets/icons/especialidade.svg';
import Especialista from '../../assets/icons/especialista.svg';
import Modalidade from '../../assets/icons/modalidade.svg';
import Duvida from '../../assets/icons/duvida.svg';
import Pilates from '../../assets/icons/pilates.svg';
import Fisioterapia from '../../assets/icons/fisioterapia.svg';
import Treinamento from '../../assets/icons/treinamento.svg';
import Presencial from '../../assets/icons/presencial.svg';
import Online from '../../assets/icons/online.svg';

import {
  Container,
  Title,
  Icon
} from './styles';

interface OptionsProps extends TextInputProps {
  title: string;
}

const Options: React.FC<OptionsProps> = ({title}) => {
  
  function optionFilter(){
    if (title === "Especialidade") {
      return <Especialidade width="80" height="80"/>
    } else if(title === "Especialistas"){
      return <Especialista width="80" height="80"/>
    } else if(title === "Modalidade"){
      return <Modalidade width="80" height="80"/>
    } else if(title === "Dúvidas"){
      return <Duvida width="80" height="80"/>
    } else if(title === "Pilates"){
      return <Pilates width="80" height="80"/>
    } else if(title === "Fisioterapia"){
      return <Fisioterapia width="80" height="80"/>
    } else if(title === "Treinamento funcional"){
      return <Treinamento width="80" height="80"/>
    } else if(title === "Presencial"){
      return <Presencial width="80" height="80"/>
    } else if(title === "Online"){
      return <Online width="80" height="80"/>
    }
  }
  return (
    <Container>
      <Icon>{optionFilter()}</Icon>
      <Title>
        {title}
      </Title>
    </Container>
  );
}

export default Options; 