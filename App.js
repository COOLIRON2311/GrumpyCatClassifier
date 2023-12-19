import { React, useEffect, useState } from 'react';
import { MainScene } from './components/MainScene';
import { TrainScene } from './components/TrainScene';
import { ResultsScene } from './components/ResultsScene';

export default function App() {
  const [train_size, setTrainSize] = useState(5);
  const [scene_index, setSceneIndex] = useState(0);
  const [training_count, setTrainingCount] = useState(0);

  // Confusion matrix
  const [positives, setPositives] = useState(0);
  const [negatives, setNegatives] = useState(0);
  const [true_positives, setTruePositives] = useState(0);
  const [true_negatives, setTrueNegatives] = useState(0);
  const [false_positives, setFalsePositives] = useState(0);
  const [false_negatives, setFalseNegatives] = useState(0);

  useEffect(() => {
    setTrainingCount(train_size);
  }, [train_size]);

  switch (scene_index) {
  case 0:
    return <MainScene
      train_size={train_size}
      setTrainSize={setTrainSize}
      scene_index={scene_index}
      setSceneIndex={setSceneIndex}
    />;
  case 1:
    return <TrainScene
      training_count={training_count}
      train_size={train_size}
      setTrainingCount={setTrainingCount}
      scene_index={scene_index}
      setSceneIndex={setSceneIndex}
      positives={positives}
      setPositives={setPositives}
      negatives={negatives}
      setNegatives={setNegatives}
      true_positives={true_positives}
      setTruePositives={setTruePositives}
      true_negatives={true_negatives}
      setTrueNegatives={setTrueNegatives}
      false_positives={false_positives}
      setFalsePositives={setFalsePositives}
      false_negatives={false_negatives}
      setFalseNegatives={setFalseNegatives}
    />;
  case 2:
    return <ResultsScene
      train_size={train_size}
      setTrainingCount={setTrainingCount}
      setSceneIndex={setSceneIndex}
      positives={positives}
      setPositives={setPositives}
      negatives={negatives}
      setNegatives={setNegatives}
      true_positives={true_positives}
      setTruePositives={setTruePositives}
      true_negatives={true_negatives}
      setTrueNegatives={setTrueNegatives}
      false_positives={false_positives}
      setFalsePositives={setFalsePositives}
      false_negatives={false_negatives}
      setFalseNegatives={setFalseNegatives}
    />;
  default:
    break;
  }
}

