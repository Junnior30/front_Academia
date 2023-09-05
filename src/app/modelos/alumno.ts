import { Distrito } from "./distrito";
import { Representante } from "./representante";
export class Alumno {
  idA?: number;
  nombre: string;
  apellidoPat: string;
  apellidoMat: string;
  fechaN: Date;
  genero: boolean;
  identificacion: string;
  colegio: string;
  codigo_distrito: number;
  codigo_representante: number;
  distrito: Distrito;
  representante: Representante;

}
