import mongoose from "mongoose";
import app from "./app.js";
import logger from "./configs/logger.js";
import connectDB from "./configs/mongodb.js";

const PORT  = process.env.PORT ||  8000
connectDB()
let server = app.listen(PORT , () => logger.info(`Server Is listening on port ${PORT}...`))

const exitHandler = () => {
    if (server){
        logger.info('Server Closed')
        process.exit(1)
    }else {
        process.exit(1)
    }


}
const unexpectedErrorHandler = (error)=> {
    logger.error (error)
    exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection' , unexpectedErrorHandler)