import { Schema, model } from "mongoose";

const eventShema = new Schema({
    nombreEvento: String,
    fecha: Date,
    placa: {
        type: String,
        requiered: true,
        trim: true
    },
}, {
    timestamps: true,
    versionKey: false
});

export default model("Evento", eventShema);