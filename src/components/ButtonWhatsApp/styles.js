import styled from "styled-components";

import backgroundBtn from '../../assets/backgroundBtn.jpeg';

export const Container = styled.button`
  height: 10rem;
  max-width: 35rem;
  padding: 2rem;

  border: 1px solid red;
  border-radius: 2.5rem;
  
  box-shadow: 3px 3px 3px red;

  background: url(${backgroundBtn});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  
  .btn-primary {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;



    img {
      width: 20%;
    }
  }

   small {
    color: black;
    
    font-size: 2rem;
    font-family: 'Tenor Sans', sans-serif;
    font-weight: 700;

  }

`;