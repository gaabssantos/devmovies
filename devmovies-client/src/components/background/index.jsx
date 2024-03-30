import PropTypes from 'prop-types';

import { BackgroundImage, BackgroundGradient } from './styles';

export const Background = ({ children, imageBanner }) => {
  return (
    <BackgroundImage bgImage={imageBanner}>
      <BackgroundGradient>{children}</BackgroundGradient>
    </BackgroundImage>
  );
};

Background.propTypes = {
  children: PropTypes.node,
  imageBanner: PropTypes.string,
};
