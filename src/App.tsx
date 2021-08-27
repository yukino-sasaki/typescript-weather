import Header from './Header/header'
import Axios from './axios'
import React, {createContext, JSXElementConstructor, useReducer} from 'react';
import CurrentWeather from './currentWeather'
import './App.css';

//現在のデータはcurrentData, 3時間ごとのデータをeveryHourDataに
const initialState:{currentData:{},everyHourData:{}} ={
  currentData:{},
  everyHourData:{},
}

interface CurrentData {
    currentData : {
        cooad:{
            lat: number,
            lon: number,
        },
        name: string,
        weather:[
            main: string
        ]
    },
  }

  export type CurrentWeatherData = CurrentData | {}
    interface EveryHourData {
      everyHourData:{
        list:{
            dt_txt: string,
            weather:[
                main: string,
            ],
            main:{
                temp: number
            }
        }
      } 
    }

export type EveryWeatherData = EveryHourData | {}

type ActionType=
|{type: 'DISPLAY_WEATHER', payload:{currentData:{}}}
|{type: 'EVERYHOURDATA_WEATHER', payload:{everyHourData:{}}}

export const Store = createContext({
      weatherData: initialState,
      setWeatherData: ()=>null
  })

const App: React.FC=()=> {  
  const reducer =(state:typeof initialState, action: ActionType) =>{
   
    
    switch(action.type){
      case 'DISPLAY_WEATHER':
        return {...state, currentData: action.payload.currentData}
      case 'EVERYHOURDATA_WEATHER':
        return {...state, everyHourData: action.payload.everyHourData}
       default: return
    }
  }
    const[weatherData, setWeatherData] = useReducer(reducer,initialState)

  return (
    <Store.Provider value={{weatherData, setWeatherData}}>
    <div className="App">
      <Header />
      <CurrentWeather />
      <Axios />
    </div>
    </Store.Provider>
  )
}

export default App;
