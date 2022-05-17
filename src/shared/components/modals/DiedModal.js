import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

const DiedModal = ({visible, backdropOpacity = 0.4, onBackdropPress}) => {
  return (
    <Modal
      style={styles.modalBlock}
      isVisible={visible}
      backdropOpacity={backdropOpacity}
      hasBackdrop={true}
      coverScreen={true}
      onBackdropPress={onBackdropPress}>
      <View style={styles.wrapperBlock}>
        <Text style={styles.infoText}>К сожалению ваш персонаж умер. Вам придется начинать всё сначала.</Text>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBlock: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperBlock: {
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 100,
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontWeight: '700',
    color: '#000000',
  },
});

export default DiedModal;
