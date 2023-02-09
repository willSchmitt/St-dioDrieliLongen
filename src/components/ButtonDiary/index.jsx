import {Container} from './styles';

export function ButtonDiary({title}) {
  return (
        <Container type="button">
          <a target="_blank" href="https://agendamento.salaovip.com.br/?slug=studiodrielilongen#/app/widget/studiodrielilongen">
            <div class="btn-primary">
              <img src="/src/assets/agenda.png" alt="Imagem de uma agenda" />
              <small>{title}</small>
            </div>
          </a>
        </Container>
  )
}