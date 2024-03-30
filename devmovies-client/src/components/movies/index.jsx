import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import image from '../../assets/image.svg';
import * as C from './styles';

export const Movies = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const getMovies = (category) => {
    return data?.movies?.filter((movie) => movie?.category === category);
  };

  return (
    <C.Container>
      {data?.categories?.map((category) => (
        <>
          <C.Text>{category?.name}</C.Text>
          <Carousel responsive={responsive}>
            {getMovies(category?.type).map((data, index) => (
              <C.Movie key={index} src={data?.imageSmall} alt={data?.title} />
            ))}
          </Carousel>
        </>
      ))}

      <C.Text>All</C.Text>
      <Carousel responsive={responsive}>
        {data?.movies.map((data, index) => (
          <C.Movie key={index} src={data?.imageSmall} alt={data?.title} />
        ))}
      </Carousel>
    </C.Container>
  );
};

Movies.propTypes = {
  data: PropTypes.array,
};
