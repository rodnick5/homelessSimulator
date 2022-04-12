import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Characteristics from '../screens/ProfilePage/Сharacteristics/Characteristics';
import FoodStore from '../screens/FoodStore/FoodStore';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {
  hungryMinus,
  healthMinus,
  healthPlus,
  daysPlus,
  drunkMinus,
  happinessMinus,
  happinessPlus,
} from '../reducers/userInfo';
import {setCourse} from '../reducers/course';
import Ico from '../assets/Ico';
import HealthStore from '../screens/HealthStore/HealthStore';
import WorkStore from '../screens/WorkStore/WorkStore';
import HomelessStore from '../screens/HomelessStore/HomelessStore';
import PurchaseStore from '../screens/PurchaseStore/PurschaseStore';

const Navigator = () => {
  const Tab = createBottomTabNavigator();
  const dispatch = useDispatch();
  const food = useSelector(state => state.userInfo.food);
  const days = useSelector(state => state.userInfo.days);
  const health = useSelector(state => state.userInfo.health);
  const drunk = useSelector(state => state.userInfo.drunk);
  const happiness = useSelector(state => state.userInfo.happiness);
  const course = useSelector(state => state.course.course);

  useEffect(() => {
    const currentCourse = (Math.random() * (33 - 28) + 28).toFixed(1);
    dispatch(setCourse(currentCourse));
  }, []);

  useEffect(() => {
    if (food >= 0 && health != 0) {
      var hungryTimer = setTimeout(() => {
        if (food == 0) {
          dispatch(healthMinus());
        } else {
          dispatch(hungryMinus());
        }
        if (food >= 90 && happiness >= 90) {
          dispatch(healthPlus({health: 1, hrivna: 0}));
        }
      }, 20000);
    }
    return () => {
      clearTimeout(hungryTimer);
    };
  }, [food, health]);

  useEffect(() => {
    let dayTimer = setTimeout(() => {
      dispatch(daysPlus());
    }, 60000);
    return () => {
      clearTimeout(dayTimer);
    };
  }, [days]);

  useEffect(() => {
    if (drunk >= 0 && happiness != 0) {
      var drunkTimer = setTimeout(() => {
        if (drunk == 0) {
          dispatch(happinessMinus());
        } else {
          dispatch(drunkMinus());
        }
        if (drunk >= 90) {
          dispatch(happinessPlus({happiness: 1, hrivna: 0}));
        }
      }, 20000);
    }
    return () => {
      clearTimeout(drunkTimer);
    };
  }, [drunk, happiness]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Characteristics"
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          tabBarIcon: () => {
            return <Ico name={route.name} />;
          },
          tabBarActiveTintColor: false,
          tabBarInactiveTintColor: false,
        })}>
        <Tab.Screen
          name="Characteristics"
          component={Characteristics}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="FoodStore"
          component={FoodStore}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="HealthStore"
          component={HealthStore}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="HomelessStore"
          component={HomelessStore}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="WorkStore"
          component={WorkStore}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="PurchaseStore"
          component={PurchaseStore}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
