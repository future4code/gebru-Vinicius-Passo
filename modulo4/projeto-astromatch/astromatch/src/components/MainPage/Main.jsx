import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";


const ContainerImg = styled.img`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 415px;
  margin-left: 12px;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);
`;
const FooterAlinhado = styled.div`
  display: flex;
  width: 380px;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
`;

const EstiloDaStrings = styled.div`
  position: absolute;
  color: black;
  text-align: start;
  margin-left: 25px;
  top: 380px;
  width: 250px;
  line-height: 30px;
  height: 30px;
`;
const NomeIdade = styled.p`
  color: #fff;
  font-size: 25px;
`;
const Bio = styled.p`
  color: #fff;
  font-size: 17px;
`;

const NomeMaisBio = styled.div`
  width: 350px ;
  margin-left: -11px;;
  background: rgb(2, 0, 36);
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(35, 34, 65, 0) 0%,
    rgba(0, 0, 0, 0.7 ) 52%
  );
  border-radius: 5px;
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
          <NomeMaisBio>
            <NomeIdade>
              {perfils.name} , {perfils.age}
            </NomeIdade>
            <Bio>{perfils.bio}</Bio>

            </NomeMaisBio>
          </EstiloDaStrings>
        </div>
      }
      <FooterAlinhado>
      
        <button onClick={() => notLike(pegaPefil())}>não gostei</button>
        <button onClick={() => like(pegaPefil())}>gostei</button>
      </FooterAlinhado>
    </>
  );
};

export default MainPage;
