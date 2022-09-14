import { Button } from "@mui/material";
import React from "react";
import * as Styled from './styled';

export const Nav = () => {
    return(
        <Styled.ContainerNav>
          <Button color="secondary">Comédia</Button>
          <Button color="secondary">Ação</Button>
          <Button color="secondary">Anime</Button>
          <Button color="secondary">Romance</Button>
          <Button color="secondary">Terror</Button>
          <Button color="secondary">Lançamento</Button>
          <Button color="secondary">Comédia</Button>
        </Styled.ContainerNav>
    )
}