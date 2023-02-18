import styled from "styled-components";

export const Container = styled.div`
  .logoSite img{
    width: 100%;
    max-height: 80rem;

    margin-bottom: 3rem;
  }

  .infosClinic {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    margin-bottom: 3rem;

    h1 {
      font-size: 4.5rem;
      font-family: 'Voga', sans-serif;
      font-weight: 700;
      
      margin: 3rem;
    }
  }

  @media screen and (max-width:425px) {
    .infosClinic {
      h1 {
        text-align: center;
      }
    }

  }

  @media screen and (max-width:320px) {
    .infosClinic {
      width: 100vw;
    }
  }
`;