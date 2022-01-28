import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Cardpequeno from './components/CardPequeno/CardPequeno';
import foto from './img/vini.jfif'
import logoLabenu from './img/labenu.png'
import cart from './img/carta.png'
import loca from './img/locali.png'





function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome="Vinicius Duarte" 
          descricao="Oi, eu sou o vinicius, estou fazendo o curso de web full-stack pela a labenu. 
          Meu objetivo é atuar no mercado de trabalho na área de minha formação.
          "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <Cardpequeno
          imagem1 = {cart}
          imagem = {loca}
          email= "Vinicius.benduarte14@gmail.com"
          endereco = "Santa urusula interior da BA"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logoLabenu} 
          nome="Labenu" 
          descricao="Conhecimento com git e git-hub, inglês tecnico. experiência com javaScript, html e css. 
          E agora vamos estudar sobre o react essa tecnologia que me encontou demais, esse é o meu framework.
          Boa comunicação e gosto de trabalhar em equipe." 
        />
       
        <CardGrande 
          imagem={foto}
          nome="NASA" 
          descricao="Aqui eu nao sei o que era para adicionar entao
          to escrevendo alguma coisa pra vocês lerem.
          vou deixar uma fotinha minha pq me acho bonitinho." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
