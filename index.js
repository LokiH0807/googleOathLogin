const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const authRoute = require('./routes/auth-route')
require('./config/passport') // 引入 passport 的 passport.use，因為直接使用 use 所以不需要使用賦予給變數

// connect to mongoDB Altas
mongoose
  .connect(
    process.env.DB_CONNECT,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log('Connect to mongoDB Atlas.')
  })
  .catch((err) => {
    console.log(err)
  })

// middleware
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // replace bodyParser which is including in express
app.use('/auth', authRoute) // 檢查到有 /auth 就會進入 authRoute 判斷要做 login 或者是 google login

// page
// home
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(8080, () => {
  console.log('[Server running on port 8080]')
})
