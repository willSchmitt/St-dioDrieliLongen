import styled from "styled-components";

export const Container = styled.div`
  .back {
    position: absolute;
    margin-left: 5rem;
    padding: 2rem;
    
  }

    h1 {
      font-size: 7.5rem;
      font-family: 'Voga', sans-serif;
      font-weight: 700;
      text-align: center;
      
      margin: 6rem;
    }

    .map {
      display: flex;
      align-items: center;
      justify-content: center;

      padding-top: 8rem;
      
      iframe {
        border: 0;
        box-shadow: 2px 2px 2px black;
      }
  }
  @media screen and (max-width: 956px) {
    .back {
      position: relative;
    }
    .menu {
      display: flex;
      align-items: center;
      justify-content: space-around;

      margin-bottom: 5rem;

    }
    h1 {
      font-size: 5rem;
    }

    .map {

      max-width: 50rem;
      height: 40rem;
      
      margin: 0 auto;
    }
  }

  @media screen and (max-width:538px) {
    h1 {
      font-size: 3rem;
    }
    
    .map {
      padding: 5rem;
    }
  }


`;