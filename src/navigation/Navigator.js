import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Characteristics from '../screens/ProfilePage/Сharacteristics/Characteristics';
import FoodStore from '../screens/FoodStore/FoodStore';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {
  foodMinus,
  healthMinus,
  healthPlus,
  daysPlus,
  drunkMinus,
  happinessMinus,
  happinessPlus,
} from '../reducers/userInfo';
import {setCourses} from '../reducers/courses';
import Ico from '../assets/Ico';
import HealthStore from '../screens/HealthStore/HealthStore';
import WorkStore from '../screens/WorkStore/WorkStore';
import HomelessStore from '../screens/HomelessStore/HomelessStore';
import PurchaseStore from '../screens/PurchaseStore/PurschaseStore';
import {foodSelector, drunkSelector, happinessSelector, healthSelector} from '../shared/selectors'

const Navigator = () => {
  const Tab = createBottomTabNavigator();
  const dispatch = useDispatch();
  const health = useSelector(healthSelector)
  const food = useSelector(foodSelector)
  const drunk = useSelector(drunkSelector)
  const happiness = useSelector(happinessSelector)


  useEffect(() => {
    const moneyCourse = (Math.random() * (33 - 28) + 28).toFixed();
    const bottleCourse = (Math.random() * (5 - 1) + 1).toFixed()
    dispatch(setCourses({moneyCourse, bottleCourse}));
    const dayTimer = setInterval(() => {
      dispatch(daysPlus());
    }, 60000);
    return () => {
      clearInterval(dayTimer);
    };
  }, []);

  useEffect(() => {
    if (food >= 0 && health != 0) {
      var hungryTimer = setTimeout(() => {
        if (food == 0) {
          dispatch(healthMinus());
        } else {
          dispatch(foodMinus());
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
