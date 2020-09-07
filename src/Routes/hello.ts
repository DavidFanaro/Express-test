import express from 'express'

export const helloRoute = express.Router()

helloRoute.get("/:id", (req ,res) =>{
    const name = req.params.id
    const helloStr = 'Hello : ' + name
    res.send(helloStr)
})


