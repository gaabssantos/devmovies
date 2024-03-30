import logoImage from '../../assets/logo.svg';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <img src={logoImage} alt="logo" />
      <nav>
        <a href="#movies">Movies</a>
        <a href="#tvShows">Tv Shows</a>
        <a href="#all">All</a>
      </nav>
    </Container>
  );
};
