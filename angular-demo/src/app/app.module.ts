import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { StorageService } from './services/storage.service';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { HomeComponent } from './components/home/home.component';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    SearchComponent,
    LifecycleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ StorageService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
