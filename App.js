import { useState } from 'react';
import { MainScreen } from './MainScreen';

export default function App() {
  const [train_size, setTrainSize] = useState(10);
  const [scene_index, setSceneIndex] = useState(0);

  switch (scene_index) {
    case 0:
      return <MainScreen
      train_size={train_size}
      setTrainSize={setTrainSize}
      scene_index={scene_index}
      setSceneIndex={setSceneIndex}/>;

    default:
      break;
  }
}

