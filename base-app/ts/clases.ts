interface FullName {
    apellidos: string;
    edad: number;
}


class User implements FullName {
    // En ts hay que definir las variables antes:
    // Por defecto se inicializan a public:

    /*
    constructor(public nombre: string,
                private apellidos: string,
                private edad: number,
                private genero: string) {}
    */

    constructor(public nombre: string,
        private apellidos: string,
        public fullName: FullName,
        private edad: number,
        private genero: string) {}

    /*
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private genero: any;


    constructor(nombre, apellidos, edad, genero) {
        this.nombre = nombre;
        this.apellidos = apellidos,
        this.edad = edad,
        this.genero = genero;
    }
     */

        saludar() {
            console.log(`Hola, soy ${this.nombre}
            ya somos muchos`);
        }
}


let oUser1 = new User({nombre: 'Juan', apellidos: 'Lopez'}, 12, 'H');


class Alumno extends User {
    curso;
    constructor(nombre, apellidos, edad, genero, curso) {
        super(nombre, apellidos, edad, genero);
        this.curso = curso;
    }

}






