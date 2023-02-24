import {Container} from './styles';

import {FiArrowLeft} from 'react-icons/fi';

export function ArriveVideo() {
  return (
    <Container>
      <div className="infos">
        <div className="back">
          <a href="/">
          <FiArrowLeft size={40} color="#000000"/>
        </a>
      </div>
        <h1>COMO CHEGAR</h1>
      </div>
      <iframe 
        width="760" 
        height="515" 
        src="https://www.youtube.com/embed/FBFLzwoKDJ8" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
          
    </Container>
  )
}