import { useEffect, useState } from 'react';
import { MainScene } from './components/MainScene';
import { TrainScene } from './components/TrainScene';
import { ResultsScene } from './components/ResultsScene';

export default function App() {
  const [train_size, setTrainSize] = useState(5);
  const [scene_index, setSceneIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [mistakes, setMistakes] = useState(0);
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
        train_size={train_size}
        setTrainingCount={setTrainingCount}
        scene_index={scene_index}
        setSceneIndex={setSceneIndex}
        correct={correct}
        setCorrect={setCorrect}
        mistakes={mistakes}
        setMistakes={setMistakes}
      />
    case 2:
      return <ResultsScene
        train_size={train_size}
        setTrainingCount={setTrainingCount}
        scene_index={scene_index}
        setSceneIndex={setSceneIndex}
        correct={correct}
        setCorrect={setCorrect}
        mistakes={mistakes}
        setMistakes={setMistakes}
      />
    default:
      break;
  }
}

