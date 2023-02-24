import { Container } from "./styles";

import {AiFillApple, AiFillAndroid, AiOutlineSchedule, FiArrowLeft} from 'react-icons/all';

export function Diary() {
  return (
    <Container>
      <header>
      <div className="back">
          <a class="back" href="/">
            <FiArrowLeft size={40} color="#000000"/>
          </a>
        </div>

      <h1>Faça seu agendamento aqui!</h1>
      </header>

      <div className="buttonsDownload">
        <a class="button" href="https://agendamento.salaovip.com.br/?slug=studiodrielilongen#/app/widget/studiodrielilongen" target="_blank" type="button">
        <AiOutlineSchedule size={40}/> ON-LINE
        </a>
        <a class="button" href="https://apps.apple.com/br/app/avec/id1394288142" target="_blank" type="button">
          <AiFillApple size={40}/> APLICATIVO IOS
        </a>
        <a class="button" href="https://play.google.com/store/apps/details?id=com.avec&pli=1" target="_blank" type="button">
        <AiFillAndroid size={40}/>  APLICATIVO ANDRIOD
        </a>
      </div>
    </Container>
  )
}