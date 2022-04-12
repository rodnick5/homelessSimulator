import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import Ico from '../../../assets/Ico';

const listOfNavigation = [
  {icon: 'head', nav: 'Characteristics'},
  {icon: 'store', nav: 'FoodStore'},
];
const LowerNavigation = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
      <FlatList
        data={listOfNavigation}
        horizontal={true}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => {navigation.navigate(item.nav)}}>
            <View>
              <Ico name={item.icon}  />
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default LowerNavigation;
