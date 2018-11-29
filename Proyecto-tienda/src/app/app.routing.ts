import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Se importan nuestros propios controladores
import { IndexComponent } from "./index/index.component";
import { TiendaComponent } from "./tienda/tienda.component";
import { ProductoComponent } from "./producto/producto.component";


const appRoutes: Routes = [
    {path: '', component: TiendaComponent},
    {path: 'index', component: IndexComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: 'producto', component: ProductoComponent},
    {path: 'producto/:identificador', component: ProductoComponent},
    {path: '**', component: IndexComponent}
]

//Es una variable que necesita angular para hacer los cambios de estados.
export const appRoutingProviders: any[] = [];
//Array de rutas que debe cargar. 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);