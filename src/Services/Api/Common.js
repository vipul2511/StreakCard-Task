import axios from 'axios';
const URL = 'https://raw.githubusercontent.com/Streak-Tech/';
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
    const isNumber = is(Number)
    return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
  })
  const in200s = isWithin(200, 299)

  const userApiClient = axios.create({
    /**
     * Import the config from the App/Config/index.js file
     */
    baseURL: URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })

  function getJackpotData(params) {
    let url='assigment/main/data.json';
    return userApiClient.get(url).then((response) => {
      console.log('sucess',response)
      if (in200s(response.status)) {
        return response['data']['numbers'];
      }
      return null
    }).catch(error => {  
        console.log('err',error)
      return null
    });
  }

  export const CommonService = {
    getJackpotData,
  }
