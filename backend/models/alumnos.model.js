//COMO Y EL DONDE SE GUARDAN LOS DATOS
import{Schema, model} from "mongoose";

export const Eschemas = new Schema({
    Name: {
        type:String
    },
    Edad: {
        type:Number
    }
});
export const Modelo = new model("Tabla de alumnos", Eschemas);

