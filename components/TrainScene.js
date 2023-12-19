import { React, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { MyButton } from './MyButton';
import data from '../assets/cats.json';

/**
 * @param {Object} props
 * @param {number} props.training_count
 * @param {number} props.train_size
 * @param {Action} props.setTrainingCount
 * @param {number} props.scene_index
 * @param {Action} props.setSceneIndex
 * @param {number} props.positives
 * @param {Action} props.setPositives
 * @param {number} props.negatives
 * @param {Action} props.setNegatives
 * @param {number} props.true_positives
 * @param {Action} props.setTruePositives
 * @param {number} props.true_negatives
 * @param {Action} props.setTrueNegatives
 * @param {number} props.false_positives
 * @param {Action} props.setFalsePositives
 * @param {number} props.false_negatives
 * @param {Action} props.setFalseNegatives
 * @typedef {React.Dispatch<React.SetStateAction<number>>} Action
 */
export function TrainScene({ training_count, train_size, setTrainingCount, scene_index, setSceneIndex,
  positives, setPositives, negatives, setNegatives,
  true_positives, setTruePositives, true_negatives, setTrueNegatives,
  false_positives, setFalsePositives, false_negatives, setFalseNegatives }) {
  const [training_set, setTrainingSet] = useState([]);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    // console.log(training_count);
    if (training_count === 0) {
      setSceneIndex(scene_index + 1);
      // console.log(scene_index);
    }
  }, [training_count]);

  useEffect(() => {
    const pos = data.filter(v => v.value).slice(0, Math.floor(train_size * 3 / 5));
    const neg = data.filter(v => !v.value).slice(0, Math.floor(train_size * 2 / 5));
    const train = shuffle(pos.concat(neg));
    setTrainingSet(train);
    setTrainingCount(train.length);
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

  /**
   * @param {boolean} value
   */
  const handleButtonPress = (value) => {
    if (value) // 1
    {
      setPositives(positives + 1);
      if (current.value) // 1 1
        setTruePositives(true_positives + 1);
      else // 1 0
        setFalsePositives(false_positives + 1);
    } else {
      setNegatives(negatives + 1);
      if (!current.value) // 0 0
        setTrueNegatives(true_negatives + 1);
      else // 0 1
        setFalseNegatives(false_negatives + 1);
    }
    setTrainingCount(training_count - 1);
  };

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
            text='Not Grumpy'
            onPress={() => handleButtonPress(false)}
          />
          <MyButton
            frameStyle={{ ...styles.btn_frame, backgroundColor: 'green' }}
            textStyle={styles.btn_text}
            text='Grumpy'
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
