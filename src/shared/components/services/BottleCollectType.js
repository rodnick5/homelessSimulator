import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import TypeOfService from './TypeOfService';
import {collectBottles} from '../../../reducers/userInfo';

const BottleCollectType = ({icon, fill, service, price = '', border = 1}) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(collectBottles())}>
      <View style={{backgroundColor: '#ffffff'}}>
        <TypeOfService
          icon={icon}
          fill={fill}
          price={price}
          border={border}
          service={service}
        />
      </View>
    </TouchableOpacity>
  );
};

export default BottleCollectType;
