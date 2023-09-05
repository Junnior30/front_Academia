import { Curso } from "./curso";
import { Empleado } from "./empleado";
import { Proyecto } from "./proyecto";

export class Clase{
    idCLAS?: number;
    fecha_inicio:Date;
    fecha_fin:Date;
    estado:boolean;
    codigo_docente:number;
    empleado:Empleado;
    codigo_curso:number;
    curso:Curso;
    codigo_proyecto:number;
    proyecto:Proyecto;

}