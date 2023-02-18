import { Container } from "./styles";

import { Link } from 'react-router-dom';

import { ButtonWhats } from "../../components/ButtonWhatsApp";
import { ButtonDiary } from "../../components/ButtonDiary";
import {ButtonMap} from "../../components/ButtonMap";
import { ButtonVideo } from "../../components/ButtonVideo";

import imageLogo from '../../assets/imagemCapa.jpeg'

export function Site() {
  return(
  <Container>

    <div className="logoSite">
      <img src={imageLogo} alt="" />
    </div>

    <section className="infosClinic">
      <h1>COMO PODEMOS TE AJUDAR?</h1>

      <ButtonDiary title="AGENDAMENTO ON-LINE" />
      <ButtonWhats title="WHATSAPP" />

      <Link to="/arrive">
        <ButtonMap title="ONDE ESTAMOS" />
      </Link>

      <Link to="/arrivevideo">
        <ButtonVideo title="COMO CHEGAR"/>
      </Link>
    </section>

    <a href=""></a>
  </Container>
  )
}