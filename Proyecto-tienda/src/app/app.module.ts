import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from "./app.routing";

import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { FormsModule } from '@angular/forms';

//Pipes
import { filtroPipe } from "./pipes/tienda/filtro.pipe";
import { filtroMarcaPipe } from "./pipes/tienda/filtroMarca.pipe";
import { filtroPrecioPipe } from "./pipes/tienda/filtroPrecio.pipe";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent} from "./footer/footer.component";
import { IndexComponent } from "./index/index.component";
import { TiendaComponent } from "./tienda/tienda.component";
import { ProductoComponent } from "./producto/producto.component";

@NgModule({
  declarations: [
    AppComponent,
    filtroPipe,
    filtroMarcaPipe,
    filtroPrecioPipe,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    TiendaComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
