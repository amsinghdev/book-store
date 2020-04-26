import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Third Party imports
import {NgxLoadingModule} from 'ngx-loading';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {HttpClientModule} from '@angular/common/http';
import {BooksApiService} from './services/books-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookDetailsComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    NgbModule
  ],
  providers: [
    BooksApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
