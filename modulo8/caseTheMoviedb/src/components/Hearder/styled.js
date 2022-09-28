import styled from 'styled-components';
import * as colors from '../../constants/colors';

export const Container = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: ${colors.tertiary};
  color: ${colors.tertiary};
 `

//   export const NavBar = styled.footer`
//   width: 100%;
//   height: 100%;
//   background-color: ${colors.secondary};
// `;

// export const LogoImg = styled.img`
// width: 15%;
// margin-left: 4.5rem;
// `