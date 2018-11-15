import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params} from "@angular/router"; 
import { Producto } from "./Producto";

@Component({
    selector: "producto",
    templateUrl: "producto.component.html"
})

export class ProductoComponent{
    public idProductoSeleccionado: string;

    constructor( 
        private _route: ActivatedRoute, 
        private _router: Router        
    ){}

    ngOnInit(){ 
        this._route.params.forEach((params: Params) => {     
        this.idProductoSeleccionado = params['identificador'];   
            console.log(this.idProductoSeleccionado); 
        }); 
        
    }
}