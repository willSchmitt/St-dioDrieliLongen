import {Container} from './styles';

import {MdOutlineLocationOn} from 'react-icons/md'

export function ButtonVideo({title, ...rest}) {
  return (
    <Container {...rest} type="button">
      <a target="_blank" href="/">
        <div class="btn-primary">
          <MdOutlineLocationOn size={80}/>
          <small>{title}</small>
        </div>
      </a>
    </Container>
  )
};
