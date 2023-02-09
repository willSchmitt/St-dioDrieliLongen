import {Container} from './styles';


export function Button({title, ...rest}) {
  return (
    <Container {...rest} type="button">
      <a target="_blank" href="https://www.google.com/">
        <div class="btn-primary">
          <img src="/src/assets/whatsapp.png" alt="" />
          <small>{title}</small>
        </div>
      </a>
    </Container>
  )
};
