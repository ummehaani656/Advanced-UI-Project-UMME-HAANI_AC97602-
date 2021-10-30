import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramComponent } from './programs.component';
import { HomeComponent } from './home.component';
import { NewsComponent } from './news.component';
import { ContactComponent } from './contact.component';
import { FacultyComponent } from './faculty.component';
import { Faculty1Component } from './faculty1.component';
import { Faculty2Component } from './faculty2.component';
import { Faculty3Component } from './faculty3.component';
import { Faculty4Component } from './faculty4.component';
import { AdmissionComponent } from './admission.component';
import { SourcesComponent } from './sources.component';
const routes: Routes = [
  {path:'programs',component: ProgramComponent},
  {path:'',component: HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'contact',component:ContactComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'faculty1',component:Faculty1Component},
  {path:'faculty2',component:Faculty2Component},
  {path:'faculty3',component:Faculty3Component},
  {path:'faculty4',component:Faculty4Component},
  {path:'admission',component:AdmissionComponent},
  {path:'sources',component:SourcesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
