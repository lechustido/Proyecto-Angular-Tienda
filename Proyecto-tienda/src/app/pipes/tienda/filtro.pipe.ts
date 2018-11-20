import { Pipe, PipeTransform } from "@angular/core";
import * as _ from 'Underscore';
import { ProductoTienda } from "../../tienda/ProductoTienda";
				
@Pipe({ name: 'filter'})

export class filtroPipe implements PipeTransform{
    transform(items: ProductoTienda[], filter: string): ProductoTienda[] {
        var productosFiltrados: Array<ProductoTienda> = [];
        if(filter == undefined || filter == "" || filter == null){
            return items;
        }
        else{
            for(let i = 0; i < items.length; i++){
                if( items[i].nombre.indexOf(filter) != -1){
                    productosFiltrados.push(items[i]);
                }
            }
            return productosFiltrados;
        }
      }
}