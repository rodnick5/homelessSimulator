import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import InformationTitle from '../../shared/components/profile/InformationTitle';
import {hrivnaPlus} from '../../reducers/userInfo';
import RatingModal from '../../shared/components/modals/RatingModal';
import WorkType from '../../shared/components/services/WorkType';
import {works} from '../../shared/enums/works';

const WorkStore = () => {
  const [ratingModal, setRatingModal] = useState(false);
  const WorksArray = works.map(item => {
    return (
      <WorkType
        icon={item.icon}
        service={item.service}
        event={hrivnaPlus}
        value={item.value}
        key={item.service}
        setRatingModalVisible={setRatingModal}
      />
    );
  });
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <InformationTitle
            title="Работа"
            pColor="#000000"
            pPaddingTop={25}
            key={'0'}
            pBorderWidth={0}
          />
        </View>
        <View>{WorksArray}</View>
      </ScrollView>
      <RatingModal
        visible={ratingModal}
        onBackdropPress={() => setRatingModal(false)}
      />
    </SafeAreaView>
  );
};

export default WorkStore;
