import PropTypes from 'prop-types';

import backgroundImage from '../../assets/background.svg';
import { BackgroundImage } from './styles';

export const Background = ({ children }) => {
  return (
    <BackgroundImage bgImage={backgroundImage}>{children}</BackgroundImage>
  );
};

Background.propTypes = {
  children: PropTypes.node,
};
