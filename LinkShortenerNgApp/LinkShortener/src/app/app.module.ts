import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FullLinkComponent } from './components/full-link/full-link.component';
import { ShortLinkComponent } from './components/short-link/short-link.component';

const routes: Routes = [
  { path: "", component: ShortLinkComponent },
  { path: ":shortLink", component: FullLinkComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShortLinkComponent,
    FullLinkComponent
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,  
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(routes),
    HttpClientModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
