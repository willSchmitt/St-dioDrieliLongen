import {Container} from './styles';

export function ButtonMap({title}) {
  return (
        <Container type="button">
          <a target="_blank" href="/">
            <div class="btn-primary">
              <img src="/src/assets/ondeEstamos.png" alt="Imagem de uma agenda" />
              <small>{title}</small>
            </div>
          </a>
        </Container>
  )
}