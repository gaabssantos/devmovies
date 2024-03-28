import { BsPlayFill } from 'react-icons/bs';

import * as C from './styles';

export const Description = () => {
  return (
    <C.Container>
      <C.Title>STAR WARS THE RISE OF SKYWALKER</C.Title>
      <C.Description>
        The surviving members of the resistance face the First Order once again,
        and the legendary conflict between the Jedi and the Sith reaches its
        peak bringing the Skywalker saga to its end.{' '}
      </C.Description>
      <C.Button>
        <BsPlayFill /> Watch Now
      </C.Button>
    </C.Container>
  );
};
