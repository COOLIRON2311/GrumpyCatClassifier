import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { MyButton } from "./MyButton";
import data from '../assets/cats.json'

/**
 * @param {Object} props
 * @param {number} props.training_count
 * @param {Action} props.setTrainingCount
 * @param {number} props.scene_index
 * @param {Action} props.setSceneIndex
 * @param {number} props.true_positives
 * @param {Action} props.setTruePositives
 * @param {number} props.true_negatives
 * @param {Action} props.setTrueNegatives
 * @typedef {React.Dispatch<React.SetStateAction<number>>} Action
 */
export function TrainScene({ training_count, setTrainingCount, scene_index, setSceneIndex, true_positives, setTruePositives, true_negatives, setTrueNegatives }) {
  const [training_set, setTrainingSet] = useState([]);
  const [sounds, setSounds] = useEffect([]);

  useEffect(() => {
    if (training_count === 0)
      setSceneIndex(scene_index + 1);
  });

  useEffect(() => {
    const pos = data.filter(v => v.value).slice(0, training_count * 3 / 5);
    const neg = data.filter(v => !v.value).slice(0, training_count * 2 / 5);
    const train = shuffle(pos.concat(neg));
    setTrainingSet(train);
  }, []);

  const goBack = () => setSceneIndex(scene_index - 1);

  return (
    <View style={styles.container}>
      <Text>{ }</Text>
      <MyButton
        text="Back"
        onPress={goBack}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3499cd',
    alignItems: 'center',
    justifyContent: 'center',
  }
}
);

/**
 *
 * @param {Array} array
 * @returns {Array}
 */
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
