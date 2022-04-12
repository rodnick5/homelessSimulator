import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BlockInfoType = ({infoType, value}) => {
  return (
    <View style={styles.infoWrapper}>
      <View style={styles.infoBlock}>
        <View>
          <Text style={styles.infoType}>{infoType}</Text>
        </View>
        <View>
          <Text style={styles.infoValue}>{value}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoWrapper: {
    width: '100%',
    height: 45,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
  },
  infoBlock: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  infoType: {
    fontWeight: '700',
    color: '#000000',
    fontSize: 16,
  },
  infoValue: {
    fontWeight: '700',
    color: '#525252',
    fontSize: 16,
  },
});

export default BlockInfoType;
