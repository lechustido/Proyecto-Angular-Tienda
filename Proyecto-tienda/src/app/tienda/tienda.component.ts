import { Component } from "@angular/core";
import { PeticionesService } from "../serviciosRest/tienda/peticiones.service";
import { ProductoTienda } from "./ProductoTienda";
import * as _ from 'Underscore';
import { BrowserStack } from "protractor/built/driverProviders";
import { Router, ActivatedRoute, Params} from "@angular/router"; 

@Component({
    selector: "tienda",
    templateUrl: "tienda.component.html",
    providers: [PeticionesService]
})

export class TiendaComponent {
    public pruebas: string;
    public productos: Array<ProductoTienda>;

    //Filtros y ordenacion de los productos
    public ordenacion: string;
    public categorias: Array<string>;
    /* public categoriaSeleccionada: string; */

    constructor(
        private _peticionesService: PeticionesService,
        private _route: ActivatedRoute, 
        private _router: Router
    ){    
        this.productos = new Array<ProductoTienda>();
        this.categorias = [];
    }

    ngOnInit(){
        this._peticionesService.getArticulos().subscribe(
            result => {
                this.productos = result.data;
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        )
        //Filtrado de categorias
        this._peticionesService.getCategorias().subscribe(
            result => {
                this.categorias = result.data;
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        )
    }

    ordenarProductos(orden){
        switch(orden){
            case 'caro':
                this.productos = _.sortBy(this.productos, 'precio');
                this.productos =  this.productos.reverse();
                break;
            case 'barato':
                this.productos = _.sortBy(this.productos, 'precio');
                break;
            case 'mValorados':
                this.productos = _.sortBy(this.productos, 'valoracion');
                this.productos =  this.productos.reverse();
                break;
        }
    }

    goProducto(idProducto){
        this._router.navigate(['/producto', idProducto]);
    }
}