export class Producto{
    constructor(
        public id: string,
        public nombre: string,
        public descripcion: string,
        public precio: number,
        public valoracion: number,
        public categoria: string,
        public imagenPrincipal:string
    ){}
}