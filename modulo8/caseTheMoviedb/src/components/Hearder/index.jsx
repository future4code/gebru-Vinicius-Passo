import React from 'react';
import * as Styled from './styled';

export const Headers = (props) => {
  return (
    <Styled.Container>
        {props.children}
    </Styled.Container>
  )
}
