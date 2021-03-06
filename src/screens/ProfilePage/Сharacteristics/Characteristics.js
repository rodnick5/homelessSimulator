import React, {useEffect, useState} from 'react';
import {ScrollView, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BlockInfoType from '../../../shared/components/profile/BlockInfoType';
import InformationTitle from '../../../shared/components/profile/InformationTitle';
import {
  setBottleExchange,
  setDied,
  setDollarBuying,
  setHrivnaBuying,
} from '../../../reducers/userInfo';
import Slider from '@react-native-community/slider';
import MoneyModal from '../../../shared/components/modals/MoneyModal';
import OneButton from '../../../shared/components/buttons/OneButton';
import BottleCollectType from '../../../shared/components/services/BottleCollectType';
import DiedModal from '../../../shared/components/modals/DiedModal';

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
  const moneyCourse = useSelector(state => state.courses.moneyCourse);
  const bottleCourse = useSelector(state => state.courses.bottleCourse);
  const diedModal = useSelector( state => state.userInfo.died)
  const dispatch = useDispatch();
  const [moneyModalVisible, setMoneyModalVisible] = useState(false);
  const [exchangeMoney, setExchangeMoney] = useState(5);
  const [receptionBottles, setReceptionBottles] = useState(1);
  const [receptionHrivna, setReceptionHrivna] = useState(1);

  useEffect(() => {
    const exchangedBottle = receptionBottles * bottleCourse;
    setReceptionHrivna(exchangedBottle);
  }, [receptionBottles, bottleCourse]);

  const bottleExchange = () => {
    if (bottles >= receptionBottles) {
      dispatch(
        setBottleExchange({bottles: receptionBottles, hrivna: receptionHrivna}),
      );
    }
  };

  const dollarBuying = () => {
    const money = exchangeMoney - (exchangeMoney % moneyCourse);
    const exchange = money / moneyCourse;
    if (hrivna >= money && money >= moneyCourse) {

      dispatch(setDollarBuying({hrivna: money, dollar: exchange}));
    } 
    if(hrivna <= money){
      setMoneyModalVisible(true)
    }
  };

  const dollarBuyingAll = () => {
    const money = hrivna - (hrivna % moneyCourse);
    const exchange = money / moneyCourse;
    if (hrivna >= moneyCourse) {
      dispatch(setDollarBuying({hrivna: money, dollar: exchange}));
    }
  };

  const hrivnaBuying = () => {
    const exchange = exchangeMoney * moneyCourse;
    if (dollar >= exchangeMoney) {
      dispatch(setHrivnaBuying({hrivna: exchange, dollar: exchangeMoney}));
    }
    if(dollar <= exchangeMoney){
      setMoneyModalVisible(true)
    }
  };

  const hrivnaBuyingAll = () => {
    const exchange = dollar * moneyCourse;
    if (dollar > 0 ) {
      dispatch(setHrivnaBuying({hrivna: exchange, dollar: dollar}));
    } else {
      setMoneyModalVisible(true)
    }
  };
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <InformationTitle
          title="????????????????????????????"
          pColor="#484c54"
          pFontWeight="400"
          pPaddingTop={30}
          pBorderWidth={0}
        />
        <BlockInfoType key={'????????????'} infoType="????????????:" value={hrivna} />
        <BlockInfoType key={'??????????????'} infoType="??????????????:" value={dollar} />
        <BlockInfoType key={'??????????????'} infoType="??????????????:" value={bottles} />
        <BlockInfoType
          key={'??????????????'}
          infoType="??????????????:"
          value={`${age} ?????? ${days} ????????`}
        />
        <BlockInfoType
          key={'??????????????????'}
          infoType="??????????????????:"
          value={transport}
        />
        <BlockInfoType
          key={'????????????????????????'}
          infoType="????????????????????????:"
          value={estate}
        />
        <BlockInfoType key={'??????????????'} infoType="??????????????:" value={rating} />
        <BlockInfoType key={'????????????'} infoType="????????????:" value={status} />
        <InformationTitle
          title="???????? ??????????????"
          pColor="#484c54"
          pFontWeight="400"
          pPaddingTop={30}
          pBorderWidth={0}
        />
        <BottleCollectType
          icon="cola"
          fill="#000000"
          service="???????????????? ??????????????"
        />
        <InformationTitle
          title="?????????? ????????????"
          pColor="#484c54"
          pFontWeight="400"
          pPaddingTop={30}
          pBorderWidth={0}
        />
        <View style={{width: '100%', backgroundColor: '#ffffff'}}>
          <View style={styles.exchangeBlock}>
            <Text style={styles.moneyText}>?????????????? ????????:</Text>
            <Text style={styles.moneyText}>{moneyCourse}?????? ???? 1$</Text>
          </View>
          <View style={styles.sliderBlock}>
            <Slider
              style={{width: '90%', height: 40}}
              minimumValue={5}
              maximumValue={5000}
              value={5}
              step={5}
              minimumTrackTintColor="#a0a5b0"
              maximumTrackTintColor="#484c54"
              thumbTintColor="#e6e9f0"
              onValueChange={value => {
                setExchangeMoney(parseInt(value));
              }}
            />
          </View>
          <View style={styles.moneyBlock}>
            <Text style={styles.moneyText}>????????????: {exchangeMoney}</Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{width: '50%'}}>
              <OneButton
                text="????????????"
                bWidth={'100%'}
                bFontSize={14}
                bHeight={35}
                bMarginTop={20}
                callback={dollarBuying}
              />
              <OneButton
                text="???????????? ???? ??????"
                bFontSize={14}
                bWidth={'100%'}
                bHeight={35}
                callback={dollarBuyingAll}
              />
            </View>
            <View style={{width: '50%'}}>
              <OneButton
                text="??????????????"
                bWidth={'100%'}
                bFontSize={14}
                bHeight={35}
                bMarginTop={20}
                callback={hrivnaBuying}
              />
              <OneButton
                text="?????????????? ???? ??????"
                bFontSize={14}
                bWidth={'100%'}
                bHeight={35}
                callback={hrivnaBuyingAll}
              />
            </View>
          </View>
        </View>
        <InformationTitle
          title="?????????? ??????????????"
          pColor="#484c54"
          pFontWeight="400"
          pPaddingTop={30}
          pBorderWidth={0}
        />
        <View style={{width: '100%', backgroundColor: '#ffffff'}}>
          <View style={styles.exchangeBlock}>
            <Text style={styles.moneyText}>???????? ???? ??????????????:</Text>
            <Text style={styles.moneyText}>{bottleCourse}??????</Text>
          </View>
          <View style={styles.sliderBlock}>
            <Slider
              style={{width: '90%', height: 40}}
              minimumValue={1}
              step={1}
              maximumValue={100}
              value={1}
              minimumTrackTintColor="#a0a5b0"
              maximumTrackTintColor="#484c54"
              thumbTintColor="#e6e9f0"
              onValueChange={value => {
                setReceptionBottles(parseInt(value));
              }}
            />
          </View>
          <View style={styles.moneyBlock}>
            <Text style={styles.moneyText}>??????????????: {receptionBottles}</Text>
            <Text style={styles.moneyText}>????????????: {receptionHrivna}</Text>
          </View>
          <OneButton text="????????????????" callback={bottleExchange} />
        </View>
      </ScrollView>
      <MoneyModal
        visible={moneyModalVisible}
        onBackdropPress={() => setMoneyModalVisible(false)}
      />
      <DiedModal
      visible={diedModal}
      onBackdropPress={() => dispatch(setDied(false))}
       />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  exchangeBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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
