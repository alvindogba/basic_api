import express from 'express'
import db from './models/index.js';
import customerRouter from './Router/custormerRouts.js';

const app = express()
const port = 3000

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.use("/api/customer", customerRouter);



app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, ()=>{
  db.sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
    console.log(`Server is running on port ${port}`)
})