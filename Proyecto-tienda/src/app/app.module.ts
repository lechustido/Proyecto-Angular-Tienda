import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from "./app.routing";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent} from "./footer/footer.component";
import { IndexComponent } from "./index/index.component";
import { TiendaComponent } from "./tienda/tienda.component";
import { ProductoComponent } from "./producto/producto.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    TiendaComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
