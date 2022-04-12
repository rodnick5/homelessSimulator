import React, {useEffect, useState} from 'react';
import {ScrollView, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BlockInfoType from '../../../shared/components/profile/BlockInfoType';
import InformationTitle from '../../../shared/components/profile/InformationTitle';
import Sound from 'react-native-sound';
import {setCurrencyExchange} from '../../../reducers/userInfo';
import Slider from '@react-native-community/slider';
import MoneyModal from '../../../shared/components/modals/MoneyModal';
import OneButton from '../../../shared/components/buttons/OneButton';

const Characteristics = () => {
  const hrivna = useSelector(state => state.userInfo.hrivna);
  const dollar = useSelector(state => state.userInfo.dollar);
  const bottles = useSelector(state => state.userInfo.bottles);
  const age = useSelector(state => state.userInfo.age);
  const days = useSelector(state => state.userInfo.days);
  const transport = useSelector(state => state.userInfo.transport);
  const estate = useSelector(state => state.userInfo.estate);
  const rating = useSelector(state => state.userInfo.rating);
  const status = useSelector(state => state.userInfo.status);
  const course = useSelector(state => state.course.course);
  const dispatch = useDispatch();
  const [moneyModalVisible, setMoneyModalVisible] = useState(false);
  const [exchangeHrivna, setExchangeHrivna] = useState(100);
  const [exchnageDollar, setExchangeDollar] = useState(1);
  const [music, setMusic] = useState(null);
  const play = () => {
    let track = new Sound('track.mp3', Sound.MAIN_BUNDLE, err => {
      if (err) {
        console.log('error', err);
        return;
      }
      track.play(success => {
        console.log('end', success);
      });
    });
    setMusic(track);
  };
  useEffect(() => {
    let exchanged = Math.round(exchangeHrivna / course);
    setExchangeDollar(exchanged);
  }, [exchangeHrivna, course]);

  const Exchange = () => {
    if (hrivna >= exchangeHrivna) {
      dispatch(
        setCurrencyExchange({hrivna: exchangeHrivna, dollar: exchnageDollar}),
      );
    } else setMoneyModalVisible(true);
  };
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <InformationTitle
          title="ХАРАКТЕРИСТИКИ"
          pColor="#484c54"
          pFontWeight="400"
          pPaddingTop={30}
          pBorderWidth={0}
        />
        <BlockInfoType key={'Гривны'} infoType="Гривны:" value={hrivna} />
        <BlockInfoType key={'Доллары'} infoType="Доллары:" value={dollar} />
        <BlockInfoType key={'Бутылки'} infoType="Бутылки:" value={bottles} />
        <BlockInfoType
          key={'Возраст'}
          infoType="Возраст:"
          value={`${age} лет ${days} дней`}
        />
        <BlockInfoType
          key={'Транспорт'}
          infoType="Транспорт:"
          value={transport}
        />
        <BlockInfoType
          key={'Недвижимость'}
          infoType="Недвижимость:"
          value={estate}
        />
        <BlockInfoType key={'Рейтинг'} infoType="Рейтинг:" value={rating} />
        <BlockInfoType key={'Статус'} infoType="Статус:" value={status} />
        <View style={styles.exchangeBlock}>
          <Text style={styles.moneyText}>{course}грн в 1$</Text>
        </View>
        <View style={styles.sliderBlock}>
          <Slider
            style={{width: '90%', height: 40}}
            minimumValue={100}
            maximumValue={10000}
            value={100}
            minimumTrackTintColor="#ff0000"
            maximumTrackTintColor="#ff0000"
            thumbTintColor="#000000"
            onValueChange={value => {
              setExchangeHrivna(parseInt(value));
            }}
          />
        </View>
        <View style={styles.moneyBlock}>
          <Text style={styles.moneyText}>Гривна: {exchangeHrivna}</Text>
          <Text style={styles.moneyText}>Доллар: {exchnageDollar}</Text>
        </View>
        <OneButton text="Обменять" callback={Exchange} />
      </ScrollView>
      <MoneyModal
        visible={moneyModalVisible}
        onBackdropPress={() => setMoneyModalVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  exchangeBlock: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
    paddingTop: 10,
  },
  sliderBlock: {
    width: '100%',
    alignItems: 'center',
  },
  moneyBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  moneyText: {
    color: '#000000',
    fontWeight: '700',
  },
});

export default Characteristics;
