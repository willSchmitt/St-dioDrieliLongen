import {Container} from './styles';


export function ButtonVideo({title, ...rest}) {
  return (
    <Container {...rest} type="button">
      <a target="_blank" href="/">
        <div class="btn-primary">
          <img src="/src/assets/loc.png" alt="Logo do WhatsApp" />
          <small>{title}</small>
        </div>
      </a>
    </Container>
  )
};
