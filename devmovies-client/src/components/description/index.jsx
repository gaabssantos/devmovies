import PropTypes from 'prop-types';
import { BsPlayFill } from 'react-icons/bs';

import * as C from './styles';

export const Description = ({ title, description, handleOpenPlayVideo }) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Description>{description}</C.Description>
      <C.Button onClick={handleOpenPlayVideo}>
        <BsPlayFill /> Watch Now
      </C.Button>
    </C.Container>
  );
};

Description.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  handleOpenPlayVideo: PropTypes.func,
};
