import {Container} from './styles';

import {BiHomeHeart} from 'react-icons/bi';

export function ButtonVideo({title, ...rest}) {
  return (
    <Container {...rest} type="button">
      <a target="_blank" href="/">
        <div class="btn-primary">
          <BiHomeHeart size={80}/>
          <small>{title}</small>
        </div>
      </a>
    </Container>
  )
};
