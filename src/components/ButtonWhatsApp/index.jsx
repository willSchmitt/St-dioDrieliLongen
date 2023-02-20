import {Container} from './styles';

import {BsWhatsapp} from 'react-icons/bs'

export function ButtonWhats({title, ...rest}) {
  return (
    <Container {...rest} type="button">
      <a target="_blank" href="https://bit.ly/AGENDEAQUII?fbclid=IwAR3ChLn6fHSVHlfxnnxyCSQW3xEjFUZUIeyumGSGdv0rdl_ebveLm2OD-Vs">
        <div class="btn-primary">
          <BsWhatsapp size={60}/>
          <small>{title}</small>
        </div>
      </a>
    </Container>
  )
};
