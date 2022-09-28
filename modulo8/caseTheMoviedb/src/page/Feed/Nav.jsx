import React from "react";
import * as Styled from './styled';

export const Nav = (props) => {
  return (
    <Styled.ContainerNav>
      {props.children}
    </Styled.ContainerNav>
  )
}
