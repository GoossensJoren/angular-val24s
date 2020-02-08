import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConcertComponent } from './components/concert/concert.component';
import { ContactComponent } from './components/contact/contact.component';
import { TvhComponent } from './components/tvh/tvh.component';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component: HomeComponent},
  {path:"concert",component: ConcertComponent},
  {path:"contact",component: ContactComponent},
  {path:"tvh",component: TvhComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
