import { useState } from 'react';

import { Background } from './components/background';
import { Description } from './components/description';
import { Header } from './components/header';
import { Movies } from './components/movies';
import { Video } from './components/video';

function App() {
  const [playVideo, setPlayVideo] = useState(false);

  const handleOpenPlayVideo = () => setPlayVideo(true);
  const handleClosePlayVideo = () => setPlayVideo(false);

  return (
    <Background>
      <Header />
      <Description handleOpenPlayVideo={handleOpenPlayVideo} />
      <Movies />
      <Video
        playVideo={playVideo}
        handleClosePlayVideo={handleClosePlayVideo}
      />
    </Background>
  );
}

export default App;
