const request = require('request')

const forecast = (latitude ,longitude, callback)=>{
    const url ='https://api.darksky.net/forecast/1741ff1a3e3f8a8682d3a8b4b9bc1757/'+latitude+','+longitude+''
    
    request({url , json : true}, (error, response)=>{
      if(error){
        callback('unable to connect weather app. please check internet connection',undefined)
      }else if(response.body.error){
        callback('unable to find location please check given details are correct ',undefined)
      }else{
        callback(undefined,response.body.daily.data[0].summary + " it is currently "+ response.body.currently.temperature + ' degress out. there is a '+response.body.currently.precipProbability +' chance of rain')
      }
    })
}

module.exports = forecast


// const url = 'https://api.darksky.net/forecast/1741ff1a3e3f8a8682d3a8b4b9bc1757/37.8267,-122.4233'

// request({url : url, json: true},(error , response) =>{
//   // const data = JSON.parse(response.body)
//   // console.log(data.currently)
//   if(error){
//     console.log('unable to connect weather app')
//   }else if (response.body.error){
//     console.log('unable to find location please check given details are correct ')
//   }else{
//     console.log(response.body.daily.data[0].summary + " it is currently "+ response.body.currently.temperature + ' degress out. there is a '+response.body.currently.precipProbability +' chance of rain')
//   }  
// })