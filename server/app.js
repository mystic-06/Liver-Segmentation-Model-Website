require('dotenv').config()
const express = require('express')
const cors = require('cors')
var indexRouter = require('./routes/index')

const port = process.env.PORT || 3001
const client_url = process.env.CLIENT_URL
const app = express()
app.use(cors())

app.use(express.json())


app.use('/',indexRouter)

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  })
})

app.listen(port,() => {
  console.log('Backend server is running on port 3001');
})