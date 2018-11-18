import { Component } from "@angular/core";
import { PeticionesService } from "../serviciosRest/tienda/peticiones.service";
import { ProductoTienda } from "./ProductoTienda";

@Component({
    selector: "tienda",
    templateUrl: "tienda.component.html",
    providers: [PeticionesService]
})

export class TiendaComponent {
    public pruebas: string;
    public productos: Array<ProductoTienda>;

    constructor(
        private _peticionesService: PeticionesService
    ){    
        this.productos = new Array<ProductoTienda>();
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
    }
}