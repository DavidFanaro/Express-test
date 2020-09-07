import express from 'express'
import {route} from './Routes/about'
import {helloRoute} from './Routes/hello'
import {createConnection, Connection} from "typeorm"

const app = express()

const connection = await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "",
    database: "TestBase"
});


app.use('/about',route)
app.use('/hello', helloRoute)
app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.get('/frog',(req, res) => {
    res.sendFile(__dirname + '/public/pepefrog.png')
})

app.get('/music',(req, res) => {
    res.sendFile(__dirname + '/public/Sinnoh シンオウ Pokemon Lofi Mix IV (128 kbps).mp3')
})

app.listen(7000 ,() => {
    console.log('Start server on 7000')
})