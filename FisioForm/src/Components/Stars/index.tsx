import React from 'react';

import StarFull from '../../assets/icons/star.svg';
import StarHalf from '../../assets/icons/star_half.svg';
import StarEmpty from '../../assets/icons/star_empty.svg';

import {
  Container,
  StarContainer,
  StarGrade
} from './styles';

interface StartsProps {
  evaluation: number;
}

const Stars: React.FC<StartsProps> = ({evaluation}) => {
  let stars = [0, 0, 0, 0, 0];
  let floor = Math.floor(evaluation);
    let left = evaluation - floor;

    for(var i=0;i<floor;i++) {
      stars[i] = 2;
    }
    if(left > 0) {
      stars[i] = 1;
    }
  return (
    <Container>
      {stars.map((i, k) => (
        <StarContainer key={k}>
          {i === 0 && <StarEmpty width="18" height="19" fill="#F2F22A"/>}
          {i === 1 && <StarHalf width="18" height="19" fill="#F2F22A"/>}
          {i === 2 && <StarFull width="18" height="19" fill="#F2F22A"/>}
        </StarContainer>
      ))}
      {<StarGrade>{evaluation}</StarGrade>}
    </Container>
  );
}

export default Stars; 