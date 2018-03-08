export interface PrinterIf {
    id: string;
    name: string;
}

/* Hacemos el implements para confirmar que la class Printer
tiene las mismas propiedades que el interface */
export class Printer implements PrinterIf {
    constructor(public id: string, public name: string) {}
}


export interface DptoIf {
    id: string;
    name: string;
}

export interface UserIf {
    nombre: string;
    apellidos: string;
    telefono: string;
}
