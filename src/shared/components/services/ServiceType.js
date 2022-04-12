import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TypeOfService from './TypeOfService';

const ServiceType = ({
  icon,
  fill,
  service,
  price = '',
  border = 1,
  event,
  value = 0,
  setMoneyModalVisible,
}) => {
  const dispatch = useDispatch();
  const hrivna = useSelector(state => state.userInfo.hrivna);
  return (
    <TouchableOpacity
      onPress={() => {
        if (hrivna >= value.hrivna) {
          dispatch(event(value));
        } else setMoneyModalVisible(true);
      }}>
      <TypeOfService
        icon={icon}
        fill={fill}
        price={price}
        border={border}
        service={service}
      />
    </TouchableOpacity>
  );
};

export default ServiceType;
