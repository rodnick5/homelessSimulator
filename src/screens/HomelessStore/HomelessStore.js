import React from 'react';
import {View, ScrollView} from 'react-native';
import InformationTitle from '../../shared/components/profile/InformationTitle';
import ServiceType from '../../shared/components/services/ServiceType';
import {hrivnaPlus} from '../../reducers/userInfo';
import {homeless} from '../../shared/enums/homeless';

const HomelessStore = () => {
  const HomelessArray = homeless.map(item => {
    return (
      <ServiceType
        icon={item.icon}
        service={item.service}
        value={item.value}
        key={item.service}
        event={hrivnaPlus}
      />
    );
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <InformationTitle
          title="Попрошайничать"
          pColor="#000000"
          pPaddingTop={25}
          key={'0'}
          pBorderWidth={0}
        />
      </View>
      <View>{HomelessArray}</View>
    </ScrollView>
  );
};

export default HomelessStore;
