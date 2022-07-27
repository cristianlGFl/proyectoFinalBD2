import { Schema, model } from "mongoose";

const taskShema = new Schema({
    propietario: String,
    pais: String,
    placa: {
        type: String,
        requiered: true,
        unique: true,
        trim: true
    },
    marca: String,
    modelo: String,
    color: String,
    valor: String,
    done: Boolean
}, {
    timestamps: true,
    versionKey: false
});

export default model("Carro", taskShema);