
import './App.css';
import {useState, useEffect } from 'react';
function App() {
const [city, setCity] = useState('hyderabad')
const [setting, setSetting] = useState({})


 useEffect(() => {
   if(city===''){
     return
   }else{
     wheatherData()
   }
  
 }, [city])


  var wheatherData=async()=>{
    try {
      let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=542841535cc53c71698ad99600fb2156`)
   let weatherDatajson =await res.json()

   console.log(weatherDatajson);
let {name}=weatherDatajson;
let {country,sunset,sunrise}=weatherDatajson.sys;
let {deg,speed}=weatherDatajson.wind;
let {lon,lat}=weatherDatajson.coord;
let {humidity,pressure,temp,temp_min,temp_max}=weatherDatajson.main;
console.log(weatherDatajson);
let weatherDatajsonData={
  name,
  country,
  sunset,
  sunrise,
  deg,
  speed,
  lon,
  lat,
  humidity,
  pressure,
  temp,
  temp_max,
  temp_min
}


   setSetting(weatherDatajsonData)
    } catch (error) {
      
    }
   
  }

  
  let chooseCity=(e)=>{
    setCity(e.target.value)
  }

  let sunRiseMin = new Date(setting.sunrise*1000).toLocaleTimeString()
  let sunSetMin = new Date(setting.sunset*1000).toLocaleTimeString()
 
  console.log(sunRiseMin);
  return (
    <>
    
    <div className="main">
      <div className="inputs">
      <input type="text" onChange={chooseCity} value={city}/>
    </div>
      <div className="cont1">
        <div className="city">
          <h4>{setting.name}</h4>
         
          <p>{setting.country}</p>
        </div>
        <div className="climate">
         <h3>temperature:{setting.temp}</h3>
         <p>Min-temperature:{setting.temp_min}</p>
         <p>Max-temperature:{setting.temp_max}</p>
        </div>
      </div>
      <div className="cont2">
        <div className="sun">

          <h4>sunrise:{sunRiseMin}</h4>
          <h4>sunset:{sunSetMin}</h4>
        </div>
        <div className="wind">
          <h5>degree:{setting.deg}</h5>
       
          <h5>wind-speed:{setting.speed}</h5>
        </div>
        <div className="co-ordinates">
          <h4>Co-Ordinates</h4>
          <h6>langitute:{setting.lon}</h6>
          <h6>latitude:{setting.lat}</h6>
        </div>
       
        
      </div>
    </div>
    </>
   
   );
}

export default App;
