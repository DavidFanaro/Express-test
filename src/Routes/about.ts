import express, { Router } from "express"

export const route = express.Router()


route.get('/',(req , res) =>{
    res.send('about')
})

