import {Container} from './styles';

import {MdOutlineLocationOn} from 'react-icons/md'

import {BiHomeHeart} from 'react-icons/bi';

export function ButtonMap({title}) {
  return (
        <Container type="button">
          <a target="_blank" href="/">
            <div class="btn-primary">
              <MdOutlineLocationOn size={80}/>
              <small>{title}</small>
            </div>
          </a>
        </Container>
  )
}