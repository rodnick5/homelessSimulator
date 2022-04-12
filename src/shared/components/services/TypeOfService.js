import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import Ico from '../../../assets/Ico';

const TypeOfService = ({icon, fill, service, price = '', border = 1}) => {
  return (
    <View style={styles.infoWrapper}>
      <View
        style={[
          styles.infoBlock,
          {borderBottomColor: '#e6e6e6', borderBottomWidth: border},
        ]}>
        <View style={styles.serviceInfo}>
          <View style={{width: 30, alignItems: 'center'}}>
            <Ico name={icon} fill={fill} />
          </View>
          <View >
            <Text style={styles.infoType}>{service}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.infoValue}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoWrapper: {
    width: '100%',
    height: 45,
    paddingLeft: 10,
  },
  infoBlock: {
    width: '100%',
    height: '100%',
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  serviceInfo: {
    height: '100%',
    maxWidth: 200,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  infoType: {
    color: '#000000',
    fontWeight: '400',
  },
  infoValue: {
    color: '#525252',
    fontWeight: '400',
  },
});

export default TypeOfService;
