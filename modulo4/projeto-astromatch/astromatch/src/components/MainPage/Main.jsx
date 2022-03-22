import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";


const ContainerImg = styled.img`
  display: flex;
  justify-content: center;
  width: 380px;
  height: 415px;
  margin-left: 1px;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);
`;
const FooterAlinhado = styled.div`
  display: flex;
  width: 380px;
  height: 70px;
  margin-top: -8px;
  justify-content: space-evenly;
  align-items: center;
`;

const EstiloDaStrings = styled.div`
  display: flex ;
  flex-direction: column ;
  justify-content: center;
  margin-top: -150px;
`;
const NomeIdade = styled.p`
  color: white;
  font-size: 25px;
`;
const Bio = styled.p`
  color: white;
  font-size: 17px;
  height: 54px;
  background: rgb(2, 0, 36);
  background: rgb(2, 0, 36);
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(35, 34, 65, 0) 0%,
    rgba(0, 0, 0, 0.7 ) 52%
  );
    
`;

    const ImgFire = styled.img`
      width: 30px;
      height: 30px;
      border-radius: 50px;

    
    `
    const ImgBlue = styled.img`
      width: 30px;
      height: 30px;
      border-radius: 50px;
    `
    const BotaoNone = styled.button`
      border: none;
      border-radius: 50px;
      width: 65px;
      height: 65px;
      :hover{
        background: #D92525;
      }
    `
    const BotaoNone2 = styled.button`
      width: 65px;
      height: 65px;
      border: none;
      border-radius: 50px;
      :hover{
        background: #591C21;
      }
    `

const MainPage = () => {
  const [perfils, setPerfils] = useState({});

  const pegaPefil = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/person`
      )
      .then((res) => {
        setPerfils(res.data.profile);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const like = () => {
    const body = {
      id: perfils.id,
      choice: true,
    };
    axios.post(
      `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/choose-person`,
      body
    );
  };

  const notLike = () => {
    const body = {
      id: perfils.id,
      choice: false,
    };
    axios.post(
      `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/choose-person`,
      body
    );
  };

  useEffect(() => {
    pegaPefil();
  }, []);

  return (
    <>
      {
        <div key={perfils.id}>
          <ContainerImg src={perfils.photo} alt={perfils.name} />

          <EstiloDaStrings>
       
            <NomeIdade>
              {perfils.name} , {perfils.age}
            </NomeIdade>
            <Bio>{perfils.bio}</Bio>

         
          </EstiloDaStrings>
        </div>
      }
      <FooterAlinhado>
      
        <BotaoNone onClick={() => notLike(pegaPefil())}>
        <ImgBlue src="https://w7.pngwing.com/pngs/948/1017/png-transparent-x-mark-logo-tinder-mobile-dating-bumble-logo-online-dating-service-false-miscellaneous-angle-orange-thumbnail.png" alt="" />
          </BotaoNone>
        <BotaoNone2 onClick={() => like(pegaPefil())}>
         
       <ImgFire src="https://br.tinderpressroom.com/image/flame-gradient-RGB_tn1100-category.png" alt="logo tinder"/>
        
            </BotaoNone2>
      </FooterAlinhado>
    </>
  );
};

export default MainPage;
