import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import perfil from './img/eu.jfif'
import foto1 from './img/pah.jfif'
import foto2 from './img/be.jfif'
import foto3 from './img/bebe.jfif'
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Vinicius Duarte'}
          fotoUsuario={perfil}
          fotoPost={foto1}
        />
   
        <Post
          nomeUsuario={'Benjamin Duarte'}
          fotoUsuario={foto2}
          fotoPost={foto3}
        />
   
        <Post
          nomeUsuario={'Caila Duarte'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={foto2}
        />
      </MainContainer>
    );
  }
}

export default App;
