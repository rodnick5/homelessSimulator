import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const OneButton = ({callback, text}) => {
  return (
    <TouchableOpacity onPress={() => callback()} style={styles.touchableBlock}>
      <View style={styles.wrapperBlock}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableBlock: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  wrapperBlock: {
    width: '60%',
    height: '100%',
    backgroundColor: '#008000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
  },
});

export default OneButton;
