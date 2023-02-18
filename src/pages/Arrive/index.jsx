import {Container} from './styles';

import {FiArrowLeft} from 'react-icons/fi';

export function Arrive() {
  return (
    <Container>
      <div className="menu">
      <div className="back">
        <a href="/">
          <FiArrowLeft size={40} color="#000000"/>
        </a>
      </div>
      <h1>ONDE ESTAMOS?</h1>
      </div>  
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.740551122923!2d-49.093393784483894!3d-26.911727983127992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df192d5aab70bb%3A0x58826e5d15cfe134!2sR.%20Jaguaruna%2C%2039%20-%20Vila%20Nova%2C%20Blumenau%20-%20SC%2C%2089035-092!5e0!3m2!1spt-BR!2sbr!4v1675965210997!5m2!1spt-BR!2sbr" 
          width="900" 
          height="550" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>    
      </div>
    </Container>
  )
}