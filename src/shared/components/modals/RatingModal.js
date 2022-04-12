import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

const RatingModal = ({visible, backdropOpacity = 0.4, onBackdropPress}) => {
  return (
    <Modal
      style={styles.modalBlock}
      isVisible={visible}
      backdropOpacity={backdropOpacity}
      hasBackdrop={true}
      coverScreen={true}
      onBackdropPress={onBackdropPress}>
      <View style={styles.wrapperBlock}>
        <Text style={styles.infoText}>У вас недостаточный рейтинг</Text>
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

export default RatingModal;
