import { Component } from "@angular/core";
import { Router} from '@angular/router';

@Component({
    selector: "index",
    templateUrl: "./index.component.html"
})

export class IndexComponent{
    public prueba:string = "prueba";
    constructor(
        private _router: Router
    ){
        
    }
    
    cambioConParametro(){
        this._router.navigate(['/producto', "Pepe mola"]);
    }

    cambioHome(){
        this._router.navigate(['/producto']);
    }
}