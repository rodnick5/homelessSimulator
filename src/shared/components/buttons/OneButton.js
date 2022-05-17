import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const OneButton = ({callback, text, bWidth = '100%', bHeight = 45 , bMarginTop = 20, bFontSize = 20}) => {
  return (
    <TouchableOpacity onPress={() => callback()} style={[styles.touchableBlock, {width: bWidth, height: bHeight, marginTop: bMarginTop }]}>
      <View style={styles.wrapperBlock}>
        <Text style={[styles.buttonText, {fontSize: bFontSize}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableBlock: {
    alignItems: 'center',
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
  },
});

export default OneButton;
