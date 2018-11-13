import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Se importan nuestros propios controladores
import { IndexComponent } from "./index/index.component";


const appRoutes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'index', component: IndexComponent},
    {path: '**', component: IndexComponent}
]

//Es una variable que necesita angular para hacer los cambios de estados.
export const appRoutingProviders: any[] = [];
//Array de rutas que debe cargar. 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);