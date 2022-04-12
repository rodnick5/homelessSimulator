import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import InformationTitle from '../../shared/components/profile/InformationTitle';
import {hrivnaPlus} from '../../reducers/userInfo';
import RatingModal from '../../shared/components/modals/RatingModal';
import WorkType from '../../shared/components/services/WorkType';
import { works } from '../../shared/enums/works';

const WorkStore = () => {
  const [ratingModal, setRatingModal] = useState(false);
  return (
    <>
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
        <View>
            <WorkType
              icon="pills"
              service="Подметать дворы"
              event={hrivnaPlus}
              value={works.yard}
              key={'1'}
              setRatingModalVisible={setRatingModal}
            />
            <WorkType
              icon="grandmother"
              service="Мыть машины"
              event={hrivnaPlus}
              value={works.cars}
              key={'2'}
              setRatingModalVisible={setRatingModal}
            />
            <WorkType
              icon="doctor"
              service="Раздавать листовки"
              event={hrivnaPlus}
              value={works.promoted}
              key={'3'}
              setRatingModalVisible={setRatingModal}
            />
            <WorkType
              icon="clinic"
              service="Работать сантехником"
              event={hrivnaPlus}
              value={works.plumber}
              key={'4'}
              setRatingModalVisible={setRatingModal}
            />
        </View>
      </ScrollView>
      <RatingModal visible={ratingModal} onBackdropPress={() => setRatingModal(false)} />
    </>
  );
};

export default WorkStore;
