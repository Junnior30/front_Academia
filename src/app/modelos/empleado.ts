import { Cargo_Emp } from "./cargo";

export class Empleado{
    idEMP?:number;
    nombre:string;
    apellido:string;
    identificacion:string;
    telefono:string;
    correo:string;
    codigo_cargo:number;
    cargo:Cargo_Emp;
}