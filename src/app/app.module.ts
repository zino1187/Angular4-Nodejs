import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//이거 반드시 해야 한다
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule //이것도 반드시 해야 한다
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
