import React from 'react'
import SvgIcon from '../shared/components/svg/SvgIcon'
import alcohol from './icons/userInformation/alcohol.svg'
import dollar from './icons/userInformation/dollar.svg'
import heart from './icons/userInformation/heart.svg'
import pizza from './icons/userInformation/pizza.svg'
import smile from './icons/userInformation/smile.svg'
import wallet from './icons/userInformation/wallet.svg'

import barGlasses from './icons/FoodStore/barGlasses'
import beer from './icons/FoodStore/beer'
import cafe from './icons/FoodStore/cafe'
import cola from './icons/FoodStore/cola'
import hotdog from './icons/FoodStore/hotdog'
import koniak from './icons/FoodStore/koniak'
import shopCart from './icons/FoodStore/shopCart'
import trashCan from './icons/FoodStore/trashCan'
import vodka from './icons/FoodStore/vodka'
import whiskey from './icons/FoodStore/whiskey'

import clinic from './icons/HealthStore/clinic.svg'
import doctor from './icons/HealthStore/doctor.svg'
import grandmother from './icons/HealthStore/grandmother.svg'
import healthCountry from './icons/HealthStore/healthCountry.svg'
import pills from './icons/HealthStore/pills.svg'
import running from './icons/HealthStore/running.svg'
import football from './icons/HealthStore/football.svg'
import bicycle from './icons/HealthStore/bicycle.svg'
import sport from './icons/HealthStore/sport.svg'

import yard from './icons/HomelessStore/yard.svg'
import crossing from './icons/HomelessStore/crossing.svg'
import railway from './icons/HomelessStore/railway.svg'
import center from './icons/HomelessStore/center.svg'

import camping from './icons/PurchaseStore/camping.svg'
import roomSingle from './icons/PurchaseStore/roomSingle.svg'
import roomDouble from './icons/PurchaseStore/roomDouble.svg'
import hotel from './icons/PurchaseStore/hotel.svg'
import skyscraper from './icons/PurchaseStore/skyscraper.svg'
import oldCar from './icons/PurchaseStore/oldCar.svg'
import newCar from './icons/PurchaseStore/newCar.svg'
import limousine from './icons/PurchaseStore/limousine.svg'
import boot from './icons/PurchaseStore/boot.svg'

import Characteristics from './icons/lowerNavigation/Characteristics.svg'
import FoodStore from './icons/lowerNavigation/FoodStore.svg'
import HealthStore from './icons/lowerNavigation/HealthStore.svg'
import WorkStore from './icons/lowerNavigation/WorkStore.svg'
import HomelessStore from './icons/lowerNavigation/HomelessStore.svg'
import PurchaseStore from './icons/lowerNavigation/PurchaseStore.svg'


const icons = { 
    alcohol,
    dollar,
    heart,
    pizza,
    smile,
    wallet,

    barGlasses,
    beer,
    cafe,
    cola,
    hotdog,
    koniak,
    shopCart,
    trashCan,
    vodka,
    whiskey,

    clinic,
    doctor,
    grandmother,
    healthCountry,
    pills,
    running,
    football,
    bicycle,
    sport,

    yard,
    crossing,
    center,
    railway,

    roomSingle,
    roomDouble,
    hotel,
    camping,
    skyscraper,
    oldCar,
    newCar,
    limousine,
    boot,

    Characteristics,
    FoodStore,
    HealthStore,
    WorkStore,
    HomelessStore,
    PurchaseStore,
}

const Ico = ({ fill, name, width = '30', height = '26' }) => {
    return (
      <SvgIcon
        width={width}
        height={height}
        fill={fill}
        fillAll={true}
        source={icons[name]}
      />
    )
  }
  
  export default Ico
  




