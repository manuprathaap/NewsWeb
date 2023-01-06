import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},//home
  {path:'tech',component:TechnewsComponent},
  {path:'business',component:BusinessnewsComponent}, //tech news
  {path:'entertainment',component:EntertainmentnewsComponent},
  {path:'health',component:HealthnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
