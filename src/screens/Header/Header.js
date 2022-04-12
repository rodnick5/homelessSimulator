import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Ico from '../../assets/Ico';
const Header = () => {
  const health = useSelector(state => state.userInfo.health);
  const food = useSelector(state => state.userInfo.food);
  const happiness = useSelector(state => state.userInfo.happiness);
  const drunk = useSelector(state => state.userInfo.drunk);
  const hrivna = useSelector(state => state.userInfo.hrivna);
  const dollar = useSelector(state => state.userInfo.dollar);
  return (
    <View style={styles.headerBackground}>
      <View style={styles.blockWrapper}>
        <View style={styles.infoBlock}>
          <Ico name="heart" fill="#000" />
          <Text key={'health'} style={[styles.infoText, {color: '#000000'}]}>
            {health}
          </Text>
        </View>
        <View style={styles.infoBlock}>
          <Ico name="pizza" fill="#000" />
          <Text key={'food'} style={[styles.infoText, {color: '#000000'}]}>
            {food}
          </Text>
        </View>
        <View style={styles.infoBlock}>
          <Ico name="smile" fill="#000" />
          <Text key={'happiness'} style={[styles.infoText, {color: '#000000'}]}>
            {happiness}
          </Text>
        </View>
      </View>
      <View style={styles.blockWrapper}>
        <View style={styles.infoBlock}>
          <Ico name="alcohol" fill="#000" />
          <Text key={'drunk'} style={[styles.infoText, {color: '#000060'}]}>
            {drunk}
          </Text>
        </View>
        <View style={styles.infoBlock}>
          <Ico name="wallet" fill="#000" />
          <Text key={'hrivna'} style={[styles.infoText, {color: '#964c39'}]}>
            {hrivna}
          </Text>
        </View>
        <View style={styles.infoBlock}>
          <Ico name="dollar" fill="#000" />
          <Text key={'dollar'} style={[styles.infoText, {color: '#008000'}]}>
            {dollar}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    paddingTop: 10,
    width: '100%',
    backgroundColor: '#f2f1f6',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  infoBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blockWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 5,
  },
  infoText: {
    fontWeight: '700',
    color: '#000000',
    fontSize: 18,
  },
});
export default Header;
