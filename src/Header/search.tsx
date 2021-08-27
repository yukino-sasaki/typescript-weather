import React,{useState,useContext} from 'react'
 import SearchIcon from '@material-ui/icons/Search';
 import Style from './search.module.css'
import axios from 'axios'
import {Store} from '../App'
import {API_KEY} from '../axios'

const SearchBox =()=>{
    const {setWeatherData, weatherData} = useContext(Store)
    const[search, setSearch]=useState('')
    const submitHandler = (e)=>{
        e.preventDefault()
        //axiosを持ってくる。API通信
        const link =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&&appid=${API_KEY}&lang=ja`
         axios.get(link).then(res =>{
             console.log(res.data)
        setWeatherData({type: 'DISPLAY_WEATHER', currentData :res.data})
        console.log(res.data)

    }).catch(err=>{
        alert('情報を取得できませんでした。入力された都市のデータがない可能性があります')
    })

    const weekLink =`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=9e3abc90f5468c5fe36b56f86a48a8cd&lang=ja`
      axios.get(weekLink).then(res =>{
        console.log(res,'week')
        setWeatherData({type: 'EVERYHOURDATA_WEATHER', everyHourData: res.data})
    }).catch(err=>{
        alert('情報を取得できませんでした。')
    })
    }
    console.log(weatherData)

    const searchHandler=(e)=>{
        setSearch(e.target.value)
    }

    return(
        <div >
           <form onSubmit={submitHandler} className={Style.location_search} >
           <SearchIcon />
           <input type="text" className={Style.search_bar} 
           onChange={searchHandler}/>
           </form>
        </div>
    )
}

export default SearchBox