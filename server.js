import express from 'express'
import userRouter from './routes/userRouter.js'

const server = express()

// api routes
server.use('/api/user', userRouter)


server.listen(8080, () => {
    console.log("Server is ruuning..");
})

// npm i -g nodemon
// step 1 : cd server  
// step 2 : npm i
// step 3 : npm run dev