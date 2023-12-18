import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { MyButton } from "./MyButton";
import data from '../assets/cats.json'

/**
 * @param {Object} props
 * @param {number} props.training_count
 * @param {number} props.train_size
 * @param {Action} props.setTrainingCount
 * @param {number} props.scene_index
 * @param {Action} props.setSceneIndex
 * @param {number} props.true_positives
 * @param {Action} props.setTruePositives
 * @param {number} props.true_negatives
 * @param {Action} props.setTrueNegatives
 * @typedef {React.Dispatch<React.SetStateAction<number>>} Action
 */
export function TrainScene({ training_count, train_size, setTrainingCount, scene_index, setSceneIndex, true_positives, setTruePositives, true_negatives, setTrueNegatives }) {
  const [training_set, setTrainingSet] = useState([]);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    // console.log(training_count);
    if (training_count === 0)
    {
      setSceneIndex(scene_index - 1);
      // console.log(scene_index);
    }
  }, [training_count]);

  useEffect(() => {
    const pos = data.filter(v => v.value).slice(0, train_size * 3 / 5);
    const neg = data.filter(v => !v.value).slice(0, train_size * 2 / 5);
    const train = shuffle(pos.concat(neg));
    setTrainingSet(train);
  }, []);

  useEffect(() => {
    if (training_set.length)
      getCurrent();
  }, [training_set, training_count]);

  const getCurrent = () => {
    const idx = Math.floor(Math.random() * training_set.length);
    setCurrent(training_set[idx]);
    training_set.splice(idx, 1);
    setTrainingSet(training_set);
  };

  const handleButtonPress = (value) => {
    if (value === current.value)
      setTruePositives(true_positives + 1);
    else
      setTrueNegatives(true_negatives + 1);
    setTrainingCount(training_count - 1);
  };

  const goBack = () => setSceneIndex(scene_index - 1);

  if (current !== null) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{training_count} / {train_size}</Text>
        <View style={styles.image_container}>
          <Image style={styles.image} source={{ uri: current.url }} />
        </View>
        <View style={styles.btn_container}>
          <MyButton
            frameStyle={{ ...styles.btn_frame, backgroundColor: 'red' }}
            textStyle={styles.btn_text}
            text="Not Grumpy"
            onPress={() => handleButtonPress(false)}
          />
          <MyButton
            frameStyle={{ ...styles.btn_frame, backgroundColor: 'green' }}
            textStyle={styles.btn_text}
            text="Grumpy"
            onPress={() => handleButtonPress(true)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3499cd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white'
  },
  image_container: {
    backgroundColor: '#f89a36',
    margin: '5%',
    padding: '2%'
  },
  image:
  {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  btn_container: {
    flexDirection: 'row',
    marginTop: '10%'
  },
  btn_frame: {
    borderRadius: 10,
    marginHorizontal: '2%'
  },
  btn_text: {
    fontSize: 30,
    color: 'white',
    margin: '5%',
  }
});

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
