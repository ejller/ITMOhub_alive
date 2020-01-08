const API_KEY = 'b6907d289e10d714a6e88b30761fae22'
export const weatherAction={
  weather
}

function weather(){
  return dispatch => {
  let lon = 35;
  let lat = 139;
  navigator.geolocation.getCurrentPosition(function(position){
    console.log('i work')
    lon = position.coords.longitude;
    lat = position.coords.latitude;
    console.log(lon+" "+lat)
    console.log(position)
    const url = 'https://openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+API_KEY;
    fetch(url).then(
      response => {
        response.text().then(text=>{
          const data = text && JSON.parse(text)
          if (data.weather!==''){
          const res =  data.weather[0].main;
          let time = false
          const date = new Date();
          if(date.getHours()<6||date.getHours()>18)
           time = true
          dispatch(updateWeather(res));
          dispatch(updateTime(time));
          }
        })
      }
    )
    })
  }
    function updateWeather(data){
      return {type: 'UPDATE_WEATHER', data}
    }
    function updateTime(data){
      return {type: 'UPDATE_TIME', data}
    }
}
