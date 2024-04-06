import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import * as C from './styles';

export const Movies = ({ data, handleVideo }) => {
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
        <div key={category?.name}>
          <C.Text id={category?.type}>{category?.name}</C.Text>
          <Carousel responsive={responsive}>
            {getMovies(category?.type).map((data, index) => (
              <C.Movie
                key={index}
                src={data?.imageSmall}
                alt={data?.title}
                onClick={() => handleVideo(data)}
              />
            ))}
          </Carousel>
        </div>
      ))}

      <C.Text id="all">All</C.Text>
      <Carousel responsive={responsive}>
        {data?.movies.map((data, index) => (
          <C.Movie
            key={index}
            src={data?.imageSmall}
            alt={data?.title}
            onClick={() => handleVideo(data)}
          />
        ))}
      </Carousel>
    </C.Container>
  );
};

Movies.propTypes = {
  data: PropTypes.array,
  handleVideo: PropTypes.func,
};
