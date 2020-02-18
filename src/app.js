const express = require('express')
const path = require('path')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast') 

const app = express()

const pathDirectory = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates')
app.set('view engine','hbs')
app.set('views',viewPath)
app.use(express.static(pathDirectory))

app.get('',(req,res)=>{
    res.render('index',{
        title : "index page",
        name : "kirthivasan"
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title : "about page",
        name : "kirthivasan"
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title : "help page",
        name : "kirthivasan"
    })
})

app.get('/example for req query',(req,res)=>{ 
    if(!req.query.search){
        return res.send({
            error : "provide search item"
        })
    }
    res.send({
        product : []
    })
})

app.get('/weather-app',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error : "address must please provide address"
        })
    }
    geocode(req.query.address,(error,data)=>{
        if(error){
            return res.send({error})
        }
        forecast(data.latitude, data.longitude,(error,forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast : forecastData,
                location : data.location,
                address : req.query.address
            })
        })
    })

    // res.send({
    //     forecast : "climate",
    //     location : "given location",
    //     address : req.query.address
    // })
})
app.listen(3000,()=>{
    console.log('server run on 3000 port')
})