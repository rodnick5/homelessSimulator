import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const InformationTitle = ({title, pFontWeight = '700', pColor = '#6d6c71', pPaddingTop = 25, pBorderWidth = 1}) => {
  return (
    <View
      style={[styles.infoBlock, {borderTopWidth: pBorderWidth, paddingTop: pPaddingTop}]}>
      <Text style={{fontWeight: pFontWeight, color: pColor, fontSize: 16}}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoBlock:{
    backgroundColor: '#f2f1f6',
    paddingBottom: 10,
    paddingLeft: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
  },
})

export default InformationTitle;
