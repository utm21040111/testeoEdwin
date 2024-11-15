import { Modelo } from "../models/alumnos.model.js";

Modelo.create({
    Name: "Rodolfo",
    Edad: 25
});

export const test1 = ()=>{
    console.log("Funciona el controlador")
};