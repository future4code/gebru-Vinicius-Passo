import styled from "styled-components"

export const CartTripDetail = styled.div`
    display: flex;
    flex-direction: column;
   
    label{
        border: 1px solid black;
        width: 350px;
        height: 40px;
        box-sizing: 0 4px 8px 0 rgba(0,0,0,0.3);
        padding: 10px 20px;
        border-radius: 4px;
        margin: 10px 0px;
        align-items: center;
        justify-content: space-between;
        width: 460px;
    &:hover{
        cursor: pointer;
        background-color: #b6d4e3;
    }
    }
`