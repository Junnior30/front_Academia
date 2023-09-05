import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: '',
        icon: 'bx bx-pencil',
        label: 'Registro',
        items:[
            {
                routeLink:'',
                label: 'Alumno',
                items:[
                    {
                        routeLink:'alumno/list',
                        label: 'Listar Alumno'
                    },
                    {
                        routeLink:'alumno/create',
                        label: 'Crear Alumno'
                    }
                ]
            },
            {
                routeLink:'',
                label: 'Representante',
                items:[
                    {
                        routeLink:'representante/list',
                        label: 'Listar Representante'
                    },
                    {
                        routeLink:'representante/create',
                        label: 'Crear Representante'
                    }
                ]
            },
            {
                routeLink:'',
                label:'Proyecto',
                items:[
                    {
                        routeLink:'proyecto/list',
                        label: 'Listar Proyectos'
                    },
                    {
                        routeLink:'proyecto/create',
                        label: 'Crear Proyecto'
                    }
                ]
            },
            {
                routeLink:'',
                label: 'Empleado',
                items:[
                    {
                        routeLink:'empleado/list',
                        label: 'Listar Empleado'
                    },
                    {
                        routeLink:'empleado/create',
                        label:'Crear Empleado'
                    }
                ]
            }
        ]
    },
    {
        routeLink: '',
        icon: 'fal fa-user',
        label: 'Inscripción',
        items:[
            {
                routeLink:'',
                label: 'Alumno',
                items:[
                    {
                        routeLink:'inscripcion/list',
                        label: 'Listar Inscripción'
                    },
                    {
                        routeLink:'inscripcion/create',
                        label: 'Crear Inscripción'
                    }
                ]
            }
        ]
    },
    {
        routeLink:'',
        icon:'',
        label:'Clase',
        items:[
            {
                routeLink:'clase/list',
                label:'Listar Clase'
            },
            {
                routeLink:'clase/create',
                label:'Crear Clase'
            }
        ]
    }
];