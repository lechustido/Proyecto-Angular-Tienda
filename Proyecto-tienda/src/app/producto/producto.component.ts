import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params} from "@angular/router"; 
import { Producto } from "./Producto";
import { PeticionesProductoService } from "../serviciosRest/producto/peticionesProducto.service";

@Component({
    selector: "producto",
    templateUrl: "producto.component.html",
    providers: [PeticionesProductoService]
})

export class ProductoComponent{
    public idProductoSeleccionado: string;
    public producto: Producto;

    constructor( 
        private _route: ActivatedRoute, 
        private _router: Router,
        private _peticionesService: PeticionesProductoService     
    ){
        
    }

    //Probad a hacerlo con input
    ngOnInit(){ 
        this._route.params.forEach((params: Params) => {     
            this.idProductoSeleccionado = params['identificador'];   
        }); 
        
        this._peticionesService.getArticulo(this.idProductoSeleccionado).subscribe(
            result => {
                this.producto = result.data;
                console.log(this.producto);
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        )
    }
}