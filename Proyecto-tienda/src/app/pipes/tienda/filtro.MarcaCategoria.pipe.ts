import { Pipe, PipeTransform } from "@angular/core";
import * as _ from 'Underscore';
import { ProductoTienda } from "../../tienda/ProductoTienda";
				
@Pipe({ name: 'filterMarcaCategoria'})

export class filterMarcaCategoria implements PipeTransform{
    transform(items: ProductoTienda[], filter: string): ProductoTienda[] {
        var productosFiltrados: Array<ProductoTienda> = [];
        if(filter == null || filter == undefined || filter == "" || filter == "nada"){
            return items;
        }else{
            for(let i = 0; i < items.length; i++){
                if( _.contains(items[i], filter)){
                    productosFiltrados.push(items[i]);
                }
            }
        return productosFiltrados;
        }
    }
}