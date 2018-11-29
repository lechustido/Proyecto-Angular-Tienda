import { Pipe, PipeTransform } from "@angular/core";
import * as _ from 'Underscore';
import { ProductoTienda } from "../../tienda/ProductoTienda";
				
@Pipe({ name: 'filterPrecio'})

export class filtroPrecioPipe implements PipeTransform{
    transform(items: ProductoTienda[], filtermMin: string, filterMax: string): ProductoTienda[] {
        var productosFiltrados: Array<ProductoTienda> = [];
        if((filtermMin == null || filtermMin == undefined || filtermMin == "") && (filterMax == null || filterMax == undefined || filterMax  == "")){
            return items;
        }else{
            if((filtermMin == null || filtermMin == undefined || filtermMin == "") && (filterMax != null || filterMax != undefined || filterMax  != "")){
                for(let i = 0; i < items.length; i++){
                    if(items[i].precio <= Number(filterMax)){
                        productosFiltrados.push(items[i]);
                    }
                }
                return productosFiltrados;
            }else  if((filterMax == null || filterMax == undefined || filterMax  == "") && (filtermMin != null || filtermMin != undefined || filtermMin != "")){

                for(let i = 0; i < items.length; i++){
                    if(items[i].precio > parseFloat(filtermMin)){
                        productosFiltrados.push(items[i]);
                    }
                }
                return productosFiltrados;
            }else{
                    console.log("Hola3");
                for(let i = 0; i < items.length; i++){
                    if((items[i].precio > parseFloat(filtermMin)) && (items[i].precio < parseFloat(filterMax))){
                        productosFiltrados.push(items[i]);
                    }
                }
                return productosFiltrados;
            }
        }
    }
}