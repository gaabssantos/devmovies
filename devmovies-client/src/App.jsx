import { Background } from './components/background';
import { Description } from './components/description';
import { Header } from './components/header';
import { Movies } from './components/movies';

function App() {
  return (
    <Background>
      <Header />
      <Description />
      <Movies />
    </Background>
  );
}

export default App;
