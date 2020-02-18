const request = require('request')

const geocode = (address , callback) =>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoia2lydGhpdmFzYW4iLCJhIjoiY2s2NjdyZWpyMDQ4aTNtbTg1eXpta2Q0dyJ9.jjdfE7j_i-k1l_xvPOziiw&limit=1'
  
    request({url , json: true}, (error , response)=>{
      if(error){
        callback('check ur internet connection', undefined)
      }else if(response.body.features.length === 0){
        callback('given location details are wrong', undefined)
      }else{
        callback(undefined ,{
          latitude : response.body.features[0].center[0] ,
          longitude : response.body.features[0].center[1] ,
          location : response.body.features[0].place_name
        })
      }
    })
}

module.exports = geocode


// const geocodeUrl ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2lydGhpdmFzYW4iLCJhIjoiY2s2NjdyZWpyMDQ4aTNtbTg1eXpta2Q0dyJ9.jjdfE7j_i-k1l_xvPOziiw&limit=1'

// request({url : geocodeUrl , json : true},(error , response) =>{
//   if(error){
//     console.log('check ur internet connection')
//   }else if(response.body.features.length === 0){
//     console.log('given location is wrong')
//   }else{
//     const latitude = response.body.features[0].center[0]
//     const longitude = response.body.features[0].center[1]
//     console.log(latitude )
//     console.log(longitude)    
//   }

// })


  
