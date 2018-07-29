const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://samples.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=e4d32ef58951825b81ff89b384d1fa4d`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}