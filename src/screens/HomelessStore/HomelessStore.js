import React, { useCallback, useState } from 'react';
import {View, ScrollView, SafeAreaView, Text, Button} from 'react-native';
import InformationTitle from '../../shared/components/profile/InformationTitle';
import ServiceType from '../../shared/components/services/ServiceType';
import {hrivnaPlus} from '../../reducers/userInfo';
import {homeless} from '../../shared/enums/homeless';
import OneButton from '../../shared/components/buttons/OneButton';

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
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <InformationTitle
            title="Попрошайничать"
            pColor="#000000"
            pPaddingTop={25}
            pBorderWidth={0}
          />
        </View>
        <View>{HomelessArray}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomelessStore;
