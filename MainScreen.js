import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

/**
 * @param {Object} props
 * @param {number} props.train_size
 * @param {React.Dispatch<React.SetStateAction<number>>} props.setTrainSize
 *  * @param {number} props.scene_index
 * @param {React.Dispatch<React.SetStateAction<number>>} props.setSceneIndex
 * @returns
 */
export function MainScreen({ train_size, setTrainSize, scene_index, setSceneIndex }) {
  const nextScene = () => setSceneIndex(scene_index + 1);

  return (
    <View style={styles.container}>
      <View style={styles.text_frame}>
        <Text style={{ ...styles.text, 'color': 'white' }}> Greetings, young model!</Text>
        <Text style={styles.text}>Let's teach you to classify</Text>
        <Text style={{ ...styles.text, 'color': 'white', 'marginVertical': '7%' }}>grumpy cats</Text>
        <Text style={styles.text}>Choose training set size:</Text>
        <Text style={styles.slider_value}>{train_size}</Text>
        <Slider
          minimumValue={1}
          maximumValue={100}
          step={1}
          onValueChange={v => setTrainSize(v)}>
        </Slider>
      </View>
      <TouchableWithoutFeedback onPress={nextScene}>
        <View style={styles.btn_frame}>
          <Text style={styles.btn_text}>Continue</Text>
        </View>
      </TouchableWithoutFeedback>
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
  slider_value: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: '1%'
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
