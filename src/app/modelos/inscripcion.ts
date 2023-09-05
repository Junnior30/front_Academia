import { Alumno } from "./alumno";
import { Proyecto } from "./proyecto";
export class Inscripcion {
    idI?:number;
    fecha:Date;
    estado:boolean;
    costo:number;
    codigo_alumno:number;
    alumno:Alumno;
    codigo_proyecto:number;
    proyecto:Proyecto;
}
