export class ProductoTienda{
    constructor(
        public idproductos: string,
        public nombre: string,
        public descripcion: string,
        public precio: number,
        public valoracion: number,
        public categoria: string
    ){}
}