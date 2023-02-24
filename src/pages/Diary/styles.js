import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  

  .back {
    position: absolute;
    margin-left: 5rem;
    padding: .6rem;
  }

  h1 {
      font-size: 4rem;
      font-family: 'Tenor Sans', sans-serif;
      font-weight: 700;
      color: black;
      
     text-align: center;

      margin-top: 6rem;
  }

  .buttonsDownload {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .button {
    height: 11rem;
    width: 35rem;

    border-radius: 2.5rem;
    border: none;

    box-shadow: 4px 4px 4px ${({theme}) => theme.COLORS.GRAY};

    background-color: ${({theme}) => theme.COLORS.BLACK};

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 4rem;
      
      font-size: 2rem;
      font-family: 'Tenor Sans', sans-serif;
      font-weight: 700;

      color: ${({theme}) => theme.COLORS.WHITE};
  }

  
`;