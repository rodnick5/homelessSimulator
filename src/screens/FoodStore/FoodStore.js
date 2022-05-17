import React, {useState} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import InformationTitle from '../../shared/components/profile/InformationTitle';
import ServiceType from '../../shared/components/services/ServiceType';
import {foodPlus, drunkPlus} from '../../reducers/userInfo';
import MoneyModal from '../../shared/components/modals/MoneyModal';
import {food} from '../../shared/enums/food';
import {drunk} from '../../shared/enums/drunk';

const FoodStore = () => {
  const [moneyModalVisible, setMoneyModalVisible] = useState(false);
  const FoodArray = food.map(item => {
    return (
      <ServiceType
        icon={item.icon}
        fill={item.fill}
        service={item.service}
        price={item.price}
        event={foodPlus}
        value={item.value}
        key={item.service}
        setMoneyModalVisible={setMoneyModalVisible}
      />
    );
  });
  const DrunkArray = drunk.map(item => {
    return (
      <ServiceType
        icon={item.icon}
        service={item.service}
        price={item.price}
        event={drunkPlus}
        value={item.value}
        key={item.service}
        setMoneyModalVisible={setMoneyModalVisible}
      />
    );
  });
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <InformationTitle
            title="Еда"
            pColor="#000000"
            pPaddingTop={25}
            key={'0'}
            pBorderWidth={0}
          />
        </View>
        <View>{FoodArray}</View>
        <View>
          <InformationTitle
            title="Напитки для настроения"
            pColor="#000000"
            pPaddingTop={25}
            key={'10'}
          />
        </View>
        <View>{DrunkArray}</View>
      </ScrollView>
      <MoneyModal
        visible={moneyModalVisible}
        onBackdropPress={() => setMoneyModalVisible(false)}
      />
    </SafeAreaView>
  );
};

export default FoodStore;
