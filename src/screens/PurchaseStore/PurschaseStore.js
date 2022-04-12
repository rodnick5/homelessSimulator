import React, {useState} from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import InformationTitle from '../../shared/components/profile/InformationTitle';
import {setEstate, setTransport} from '../../reducers/userInfo';
import {estate} from '../../shared/enums/estate';
import PurchaseType from '../../shared/components/services/PurchaseType';
import {transport} from '../../shared/enums/transport';
import MoneyModal from '../../shared/components/modals/MoneyModal';

const PurchaseStore = () => {
  const [moneyModalVisible, setMoneyModalVisible] = useState(false);
  const EstateArray = estate.map(item => {
    return (
      <PurchaseType
        icon={item.icon}
        service={item.service}
        price={item.price}
        event={setEstate}
        value={item}
        key={item.service}
        setMoneyModalVisible={setMoneyModalVisible}
      />
    );
  });
  const TransportArray = transport.map(item => {
    return (
      <PurchaseType
        icon={item.icon}
        service={item.service}
        price={item.price}
        event={setTransport}
        value={item}
        key={item.service}
        setMoneyModalVisible={setMoneyModalVisible}
      />
    );
  });
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.infoWrapper}>
          <InformationTitle
            title="Недвижимость"
            pColor="#000000"
            pPaddingTop={25}
            key={'0'}
            pBorderWidth={0}
          />
        </View>
        <View style={styles.purchasesWrapper} >{EstateArray}</View>
        <View style={styles.infoWrapper} >
          <InformationTitle
            title="Транспорт"
            pColor="#000000"
            pPaddingTop={25}
            key={'5'}
            pBorderWidth={0}
          />
        </View>
        <View style={styles.purchasesWrapper} >{TransportArray}</View>
      </ScrollView>
    <MoneyModal visible={moneyModalVisible} onBackdropPress={() => setMoneyModalVisible(false)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  infoWrapper:{
    width: '100%'
  },
  purchasesWrapper:{
    width: '100%'
  }
})

export default PurchaseStore;
