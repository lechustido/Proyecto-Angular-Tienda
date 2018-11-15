import { Component } from "@angular/core";

@Component({
    selector: "tienda",
    templateUrl: "tienda.component.html"
})

export class TiendaComponent {
    public pruebas: string;

    constructor(){
        this.pruebas = "Pruebasssssss"
    }
}