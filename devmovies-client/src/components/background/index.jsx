import PropTypes from 'prop-types';

import backgroundImage from '../../assets/background.svg';
import { BackgroundImage, BackgroundGradient } from './styles';

export const Background = ({ children }) => {
  return (
    <BackgroundImage bgImage={backgroundImage}>
      <BackgroundGradient>{children}</BackgroundGradient>
    </BackgroundImage>
  );
};

Background.propTypes = {
  children: PropTypes.node,
};
