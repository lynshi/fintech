import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PriceDisplayComponent } from './stocks/stock-display/price-display/price-display.component';
import { StockSelectionFormComponent } from './stocks/stock-display/stock-selection-form/stock-selection-form.component';
import { StockDisplayComponent } from "./stocks/stock-display/stock-display.component";

@NgModule({
  declarations: [
    AppComponent,
    PriceDisplayComponent,
    StockSelectionFormComponent,
    StockDisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
