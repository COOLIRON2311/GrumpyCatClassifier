import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

/**
 *
 * @param {Object} props
 * @param {Object} props.frameStyle
 * @param {Object} props.textStyle
 * @param {string} props.text
 * @param {import("react-native").GestureResponderEvent} props.onPress
 */
export function MyButton({ frameStyle, textStyle, text, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={frameStyle}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
