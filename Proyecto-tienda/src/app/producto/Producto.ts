export class Producto{
    constructor(
        public idproductos: string,
        public nombre: string,
        public descripcion: string,
        public precio: number,
        public valoracion: number,
        public categoria: string,
        public Imagenprincipal:string,
        public imagenes:string
    ){}
}