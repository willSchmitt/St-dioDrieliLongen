import {Container} from './styles';

import {FiArrowLeft} from 'react-icons/fi';

export function ArriveVideo() {
  return (
    <Container>
        <div className="back">
          <a href="/">
          <FiArrowLeft size={40} color="#000000"/>
        </a>
      </div>
        <h1>COMO CHEGAR</h1>
        <video src=""></video>
    </Container>
  )
}