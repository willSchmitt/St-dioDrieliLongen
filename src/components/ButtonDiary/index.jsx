import {Container} from './styles';

import {AiOutlineSchedule} from 'react-icons/ai'

export function ButtonDiary({title}) {
  return (
        <Container type="button">
          <a target="_blank" href="https://agendamento.salaovip.com.br/?slug=studiodrielilongen#/app/widget/studiodrielilongen">
            <div class="btn-primary">
              <AiOutlineSchedule size={90}/>
              <small>{title}</small>
            </div>
          </a>
        </Container>
  )
}