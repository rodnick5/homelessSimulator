import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import InformationTitle from '../../shared/components/profile/InformationTitle';
import ServiceType from '../../shared/components/services/ServiceType';
import {happinessPlus, healthPlus} from '../../reducers/userInfo';
import MoneyModal from '../../shared/components/modals/MoneyModal';
import {health} from '../../shared/enums/health';
import {happiness} from '../../shared/enums/happiness';

const HealthStore = () => {  
  const [moneyModal, setMoneyModal] = useState(false);
  const HealthArray = health.map(item => {
    return (
      <ServiceType
        icon={item.icon}
        fill={item.fill}
        service={item.service}
        price={item.price}
        event={healthPlus}
        value={item.value}
        key={item.service}
        setMoneyModalVisible={setMoneyModal}
      />
    );
  });
  const HappinessArray = happiness.map(item => {
    return (
      <ServiceType
        icon={item.icon}
        service={item.service}
        price={item.price}
        event={happinessPlus}
        value={item.value}
        key={item.service}
        setMoneyModalVisible={setMoneyModal}
      />
    );
  });

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <InformationTitle
            title="Поднять здоровье"
            pColor="#000000"
            pPaddingTop={25}
            key={'0'}
            pBorderWidth={0}
          />
        </View>
        <View style={styles.wrapperBlock}>{HealthArray}</View>
        <View>
          <InformationTitle
            title="Занятия спортом"
            pColor="#000000"
            pPaddingTop={25}
            key={'10'}
          />
        </View>
        <View style={styles.wrapperBlock}>{HappinessArray}</View>
      </ScrollView>
      <MoneyModal
        visible={moneyModal}
        onBackdropPress={() => setMoneyModal(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapperBlock: {
    width: '100%',
  },
});

export default HealthStore;
