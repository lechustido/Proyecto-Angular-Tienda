import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import {map} from 'rxjs/operators';
import { Observable } from "rxjs/Observable";


@Injectable()

export class PeticionesService{
    public url: string;

    constructor(private _http:Http) {
        this.url = "http://localhost/Proyecto-Angular-Tienda/Proyecto-Tienda-Backend/index.php/";
    }

    getArticulos(){
        return this._http.get(this.url + "todosProductos").pipe(map(respuesta => respuesta.json()));
    }

    getCategorias(){
        return this._http.get(this.url + "todasCategorias").pipe(map(respuesta => respuesta.json()));
    }
}
