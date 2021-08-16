import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SandboxComponenet } from './componenets/sandbox/sandbox.component';
import {FormsModule} from '@angular/forms'
import { MobileUserService } from './services/mobileUser.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponenet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    ],
  providers: [MobileUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
