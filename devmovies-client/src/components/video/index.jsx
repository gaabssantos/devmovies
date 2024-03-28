import { Player, Youtube } from '@vime/react';
import PropTypes from 'prop-types';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import * as C from './styles';

export const Video = ({ playVideo, handleClosePlayVideo }) => {
  return (
    playVideo && (
      <C.Container>
        <C.Button onClick={handleClosePlayVideo}>
          <AiOutlineArrowLeft />
          Back
        </C.Button>

        <Player controls>
          <Youtube videoId="HluMG9tJXHM" />
        </Player>
      </C.Container>
    )
  );
};

Video.propTypes = {
  playVideo: PropTypes.bool,
  handleClosePlayVideo: PropTypes.func,
};
