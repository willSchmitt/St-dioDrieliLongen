import {Container} from './styles';


export function ButtonWhats({title, ...rest}) {
  return (
    <Container {...rest} type="button">
      <a target="_blank" href="https://bit.ly/AGENDEAQUII?fbclid=IwAR3ChLn6fHSVHlfxnnxyCSQW3xEjFUZUIeyumGSGdv0rdl_ebveLm2OD-Vs">
        <div class="btn-primary">
          <img src="/src/assets/whats.png" alt="Logo do WhatsApp" />
          <small>{title}</small>
        </div>
      </a>
    </Container>
  )
};
