import express from 'express'
import dotenv from 'dotenv'
import morgan from "morgan";
import helmet from 'helmet';3
import mongoSanitize from 'express-mongo-sanitize'
import cookieParser from 'cookie-parser';
import compression from 'compression';
import fileUpload from 'express-fileupload';
import cors from 'cors'
import createHttpError from 'http-errors'
import routes from './routes/index.js';

dotenv.config()
const app = express ()
if (process.env.NODE_ENV !== 'production')
    app.use (morgan('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(mongoSanitize())
app.use (cookieParser())
app.use(compression())
app.use(fileUpload({useTempFiles : true}))
app.use(cors({origin : "http://localhost:3000"}))

//routes
app.use('/api/v1',routes)

app.use(async (req , res , next)=> {
    next(new createHttpError.NotFound('the route doesnt exist.'))
})
app.use(async (error,req,res,next)=> {
    res.status(error.status  || 500)
    res.send({
        error : {
            status : error.status || 500,
            message : error.message
        }
    })
})
export default app