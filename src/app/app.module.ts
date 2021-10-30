import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdmissionComponent } from './admission.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { FacultyComponent } from './faculty.component';
import { Faculty1Component } from './faculty1.component';
import { Faculty2Component } from './faculty2.component';
import { Faculty3Component } from './faculty3.component';
import { Faculty4Component } from './faculty4.component';
import { HomeComponent } from './home.component';
import { NewsComponent } from './news.component';
import { ProgramComponent } from './programs.component';
import{LocalStorageService} from'./local-storage.service';
import { SourcesComponent } from './sources.component';
@NgModule({
  declarations: [
    AppComponent,HomeComponent,ProgramComponent,NewsComponent,
    ContactComponent,FacultyComponent,Faculty1Component,Faculty2Component,
    Faculty3Component,Faculty4Component,AdmissionComponent,SourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
