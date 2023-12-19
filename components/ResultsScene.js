import { StyleSheet, Text, View } from "react-native";
import { MyButton } from "./MyButton";

/**
 *
 * @param {Object} props
 * @param {number} props.train_size
 * @param {Action} props.setTrainingCount
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
export function ResultsScene({ train_size, setTrainingCount, setSceneIndex,
  positives, setPositives, negatives, setNegatives,
  true_positives, setTruePositives, true_negatives, setTrueNegatives,
  false_positives, setFalsePositives, false_negatives, setFalseNegatives }) {

  const resetAll = () => {
    setPositives(0);
    setNegatives(0);
    setTruePositives(0);
    setTrueNegatives(0);
    setFalsePositives(0);
    setFalseNegatives(0);
    setTrainingCount(train_size);
    setSceneIndex(0);
  };

  const TPR = true_positives / positives;
  const TNR = true_negatives / negatives;
  const FPR = false_positives / negatives;
  const FNR = false_negatives / positives;
  const PPV = true_positives / (true_positives + false_positives);
  const ACC = (true_positives + true_negatives) / (positives + negatives);
  const BA = (TPR + TNR) / 2;
  const F1 = 2 * ((PPV * TPR) / (PPV + TPR))

  return (
    <View style={styles.container}>
      <View style={styles.text_frame}>
        <Text style={{ ...styles.text, color: 'white' }}>Computing metrics...</Text>
        <Text style={{ ...styles.text, color: 'white' }}>Your score:</Text>
        <Text style={styles.text}>TPR: {TPR.toFixed(2)}</Text>
        <Text style={styles.text}>TNR: {TNR.toFixed(2)}</Text>
        <Text style={styles.text}>FPR: {FPR.toFixed(2)}</Text>
        <Text style={styles.text}>FNR: {FNR.toFixed(2)}</Text>
        <Text style={styles.text}>Precision: {PPV.toFixed(2) * 100}%</Text>
        <Text style={styles.text}>Accuracy: {ACC.toFixed(2) * 100}%</Text>
        <Text style={styles.text}>Balanced accuracy: {BA.toFixed(2) * 100}%</Text>
        <Text style={styles.text}>F1 score: {F1.toFixed(2)}</Text>
      </View>
      <MyButton>
        frameStyle={styles.btn_frame}
        textStyle={styles.btn_text}
        text="Learn Again"
        onPress={resetAll}
      </MyButton>
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
