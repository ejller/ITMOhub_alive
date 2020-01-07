import weatherConst from '../_constants/weather'
import snowImg from '../CommonComponents/res/weather/snow.svg'
import cloudImg from '../CommonComponents/res/weather/cloud.svg'
import sunImg from '../CommonComponents/res/weather/sun.svg'
import rainImg from '../CommonComponents/res/weather/rain.svg'


export function weather (state={imgWeather:''}, action) {
  console.log(action.type)
  switch (action.type){
    case 'UPDATE_WEATHER':
      { switch (action.data){
        case weatherConst.CLOUDS:
          return {...state, imgWeather:cloudImg};
        case weatherConst.FOG:
          return {...state, imgWeather:cloudImg};
        case weatherConst.RAIN:
          return {...state, imgWeather:rainImg};
        case weatherConst.SNOW:
          return {...state, imgWeather:snowImg};
        case weatherConst.CLEAR:
          return {...state, imgWeather:sunImg};
        default: return {...state, imgWeather:''}
        }
      }
    case 'UPDATE_TIME':
        return {...state, isNight: action.data}
    default: return {...state}
  }
}