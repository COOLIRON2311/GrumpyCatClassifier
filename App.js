import { useEffect, useState } from 'react';
import { MainScene } from './components/MainScene';
import { TrainScene } from './components/TrainScene';

export default function App() {
  const [train_size, setTrainSize] = useState(5);
  const [scene_index, setSceneIndex] = useState(0);
  const [true_positives, setTruePositives] = useState(0);
  const [true_negatives, setTrueNegatives] = useState(0);
  const [training_count, setTrainingCount] = useState(0);

  useEffect(() => setTrainingCount(train_size), [train_size]);

  switch (scene_index) {
    case 0:
      return <MainScene
        train_size={train_size}
        setTrainSize={setTrainSize}
        scene_index={scene_index}
        setSceneIndex={setSceneIndex} />;
    case 1:
      return <TrainScene
        training_count={training_count}
        setTrainingCount={setTrainingCount}
        scene_index={scene_index}
        setSceneIndex={setSceneIndex}
        true_positives={true_positives}
        setTruePositives={setTruePositives}
        true_negatives={true_negatives}
        setTrueNegatives={setTrueNegatives}
      />
    default:
      break;
  }
}

