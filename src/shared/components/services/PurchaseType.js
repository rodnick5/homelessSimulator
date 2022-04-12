import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TypeOfService from './TypeOfService';

const PurchaseType = ({
  icon,
  fill,
  service,
  price = '',
  border = 1,
  event,
  value = 0,
  setMoneyModalVisible,
}) => {
    const transport = useSelector( state => state.userInfo.transport)
    const hrivna = useSelector( state => state.userInfo.hrivna)
    const estate = useSelector(state => state.userInfo.estate)
    const dollar = useSelector(state => state.userInfo.dollar)
    const dispatch = useDispatch();

    const purchaseHandler = () => {
      if(value.hrivna <= hrivna || value.dollar <= dollar ){
        dispatch(event(value)) 
        } else {
          setMoneyModalVisible(true)
        }
    }

  return (
    <TouchableOpacity
      onPress={() => purchaseHandler()}>
      <TypeOfService  icon={icon} fill={fill} price={price} border={border} service={service} />
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
export default PurchaseType;
