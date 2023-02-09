import styled from "styled-components";


export const Container = styled.button`
  height: 11rem;
  max-width: 35rem;

  border-radius: 2.5rem;
  border: none;

  box-shadow: 3px 3px 3px black;

  background-color: red;

  .btn-primary {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    img {
      width: 18%;
    }
  }

   small {
    color: black;
    
    font-size: 2rem;
    font-family: 'Tenor Sans', sans-serif;
    font-weight: 700;


    color: ${({theme}) => theme.COLORS.WHITE}
  }

`;