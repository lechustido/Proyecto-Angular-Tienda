import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import {map} from 'rxjs/operators';
import { Observable } from "rxjs/Observable";


@Injectable()

export class PeticionesProductoService {
    public url: string;

    constructor(private _http:Http) {
        this.url = "http://localhost/Proyecto-Angular-Tienda/Proyecto-Tienda-Backend/index.php/";
    }

    getArticulo(idProducto){
        return this._http.get(this.url + "productoSeleccionado/" + idProducto).pipe(map(respuesta => respuesta.json()));
    }
}
