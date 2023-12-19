import { StyleSheet, Text, View } from "react-native";
import { MyButton } from "./MyButton";

/**
 *
 * @param {Object} props
 * @param {number} props.train_size
 * @param {Action} props.setTrainingCount
 * @param {number} props.scene_index
 * @param {Action} props.setSceneIndex
 * @param {number} props.correct
 * @param {Action} props.setCorrect
 * @param {number} props.mistakes
 * @param {Action} props.setMistakes
 * @typedef {React.Dispatch<React.SetStateAction<number>>} Action
 */
export function ResultsScene({ train_size, setTrainingCount, scene_index, setSceneIndex, correct, setCorrect, mistakes, setMistakes }) {

  const resetAll = () => {
    setCorrect(0);
    setMistakes(0);
    setTrainingCount(train_size);
    setSceneIndex(0);
  };

  // TODO: compute proper metrics (probably never)
  const TPR = correct / train_size;
  const FNR = mistakes / train_size;
  const ACC = (correct - mistakes) / train_size * 100;

  return (
    <View style={styles.container}>
      <View style={styles.text_frame}>
        <Text style={{ ...styles.text, color: 'white' }}>Computing metrics...</Text>
        <Text style={{ ...styles.text, color: 'white' }}>Your score:</Text>
        <Text style={styles.text}>TPR: {TPR.toFixed(2)}</Text>
        <Text style={styles.text}>FNR: {FNR.toFixed(2)}</Text>
        <Text style={styles.text}>Accuracy: {ACC == Infinity ? 100 : ACC}%</Text>
      </View>
      <MyButton
        frameStyle={styles.btn_frame}
        textStyle={styles.btn_text}
        text="Learn Again"
        onPress={resetAll}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3499cd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    marginVertical: '2%'
  },
  text_frame: {
    margin: '5%',
    paddingTop: '2%',
    paddingBottom: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: '#f89a36',
    borderRadius: 20
  },
  btn_frame: {
    backgroundColor: '#001c60',
    borderRadius: 10,
    marginTop: '20%',
    fontSize: 30
  },
  btn_text: {
    fontSize: 30,
    color: 'white',
    margin: '5%'
  }
});
