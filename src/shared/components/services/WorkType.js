import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TypeOfService from './TypeOfService';

const WorkType = ({
  icon,
  fill,
  service,
  price = '',
  border = 1,
  value,
  event,
  setRatingModalVisible,
}) => {
  const rating = useSelector(state => state.userInfo.rating);
  const dispatch = useDispatch();
  
  const workHandler = () => {
    if (rating >= value.rating) {
      dispatch(event(value));
    } else {
      setRatingModalVisible(true);
    }
  };
  return (
    <TouchableOpacity onPress={() => workHandler()}>
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
    maxWidth: 170,
    flexDirection: 'row',
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
export default WorkType;
