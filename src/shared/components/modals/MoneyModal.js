import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

const MoneyModal = ({visible, backdropOpacity = 0.4, onBackdropPress}) => {
  return (
    <Modal
      style={styles.modalBlock}
      isVisible={visible}
      backdropOpacity={backdropOpacity}
      hasBackdrop={true}
      coverScreen={true}
      onBackdropPress={onBackdropPress}>
      <View style={styles.wrapperBlock}>
        <Text style={styles.infoText}>У вас недостаточно средств</Text>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBlock: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperBlock: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    height: 100,
    width: 230,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontWeight: '700',
    color: '#000000',
  },
});

export default MoneyModal;
