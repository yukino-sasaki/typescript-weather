import React,{useContext} from 'react';
import EveryHourData from './everyHourData'
import {Store, EveryWeatherData} from './App'


// 3時間ごとのデータを取ってくる
// mapとfilterで処理。現在の時間と照らし合わせて予報だけを表示させたい。
//axiosから
const WeeklyWeather =()=>{
    const {weatherData}:{weatherData: EveryWeatherData} = useContext(Store)
   //現在の日時と比較してそれ以降のデータを表示する
    const dat = new Date()
    
    return weatherData.everyHourData.list ? (
        <div>
            {weatherData.everyHourData.list.filter(data =>{
               return  Date.parse(data.dt_txt.replace(' ', 'T')) > dat.getTime()
            }).map((data,index:number)=>{
                return <EveryHourData key ={index} dateTime={data.dt_txt} weather={data.weather[0].main} temp={data.main.temp} />
            })}
        </div>
    ):(<div></div>)
}

export default WeeklyWeather

// {props.datmap(res=>{
//                return  <div>{res}</div>
//             })}