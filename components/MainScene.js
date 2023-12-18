import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View} from 'react-native';
import { MyButton } from './MyButton';

/**
 * @param {Object} props
 * @param {number} props.train_size
 * @param {Action} props.setTrainSize
 * @param {number} props.scene_index
 * @param {Action} props.setSceneIndex
 * @typedef {React.Dispatch<React.SetStateAction<number>>} Action
 * @returns
 */
export function MainScene({ train_size, setTrainSize, scene_index, setSceneIndex }) {
  const nextScene = () => setSceneIndex(scene_index + 1);

  return (
    <View style={styles.container}>
      <View style={styles.text_frame}>
        <Text style={{ ...styles.text, color: 'white' }}> Greetings, young model!</Text>
        <Text style={styles.text}>Let's teach you to classify</Text>
        <Text style={{ ...styles.text, color: 'white', 'marginVertical': '7%' }}>grumpy cats</Text>
        <Text style={styles.text}>Choose training set size:</Text>
        <Text style={styles.slider_value}>{train_size}</Text>
        <Slider
          value={train_size}
          minimumValue={1}
          maximumValue={20}
          step={1}
          onValueChange={v => setTrainSize(v)}>
        </Slider>
      </View>
      <MyButton
        frameStyle={styles.btn_frame}
        textStyle={styles.btn_text}
        text='Continue'
        onPress={nextScene}
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
  },
  btn_text: {
    fontSize: 30,
    color: 'white',
    margin: '5%'
  }
});
