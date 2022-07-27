import { connect } from "mongoose";
import { MONGODB_URI } from './config'

(async() => {


    try {
        const db = await connect("mongodb+srv://produccion:produccion123@cluster0.i2kd1.mongodb.net/sistemaAutos")
        console.log('Db connected to', db.connection.name)

    } catch (error) {
        console.error(error)
    }


})()