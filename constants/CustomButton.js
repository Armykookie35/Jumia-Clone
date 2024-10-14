// components/CustomButton.js
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ text, onPress, color, size, textColor }) => {
  const buttonStyles = [
    styles.button,
    { backgroundColor: color || '#3498db', padding: size || 10 },
  ];

  const textStyles = [
    styles.text,
    { color: textColor || '#fff' },
  ];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
