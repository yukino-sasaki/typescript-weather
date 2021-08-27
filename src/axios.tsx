import React,{useContext, useEffect} from 'react';
import axios from 'axios'
import {Store} from './App'
import WeeklyWeather from './3hweeklyweather'

export const API_KEY ='9e3abc90f5468c5fe36b56f86a48a8cd'


const Axios =()=>{
    
   const { setWeatherData} = useContext(Store)
 
   


const success=  async (position : any)=>{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    //現時点での天気を取得する
    const link =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&&appid=${API_KEY}&lang=ja`
    await axios.get(link).then(res =>{
        setWeatherData({type: 'DISPLAY_WEATHER', payload :{currentData :res.data}})

    }).catch(err=>{
        alert('情報を取得できませんでした。')
    })
    //3時間ごとの天気を取得する
    const weekLink =`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=9e3abc90f5468c5fe36b56f86a48a8cd&lang=ja`
     await axios.get(weekLink).then(res =>{
        setWeatherData({type: 'EVERYHOURDATA_WEATHER', payload :{everyHourData: res.data}})
        
    }).catch(err=>{
        alert('情報を取得できませんでした。')
    })
}




 const error =()=>{
    alert('not found')
}

//現在の経度と緯度を取得する
useEffect(()=>{
 navigator.geolocation.getCurrentPosition(success,error)
},[])

    return(
        <div>
            <WeeklyWeather />
        </div>
    )
}

export default Axios