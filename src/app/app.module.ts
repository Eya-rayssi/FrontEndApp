import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ComponentsComponent } from './components/components.component';
import { BookComponent } from './book/book.component';
//import { ServiceComponent } from './service/service.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
   // ComponentsComponent,
    BookComponent,
   // ServiceComponent,
    AddBookComponent,
    UpdateBookComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
