import styled from "styled-components";

export const Container = styled.div`
  .back {
    position: absolute;
    color: yellow;
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

    iframe {
      
      display: flex;
      margin: 0 auto;

    }

    @media screen and (max-width: 1400px) {
        iframe {
          margin: 0 auto;
          padding: 8rem;
        }
    }

    @media screen and (max-width: 1170px) {
      iframe {
        position: relative;
        left: 0;
      }
    }

    @media screen and (max-width:800px) {
      iframe {
        width: 45rem;
        height: 50rem;
      }
    }

    @media screen and (max-width: 600px) { 
      .back {
        position: relative;
      }

      .infos {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      h1 {
        font-size: 6rem;
      }

      video {
        padding: 0;

        width: 40rem;
        margin: 0 auto;

        position: relative;
      }

}
`;