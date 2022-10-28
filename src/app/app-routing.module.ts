import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:'info',pathMatch:'full',component:MainComponent},
  {path:'stats',pathMatch:'full',component:MainComponent},
  {path:'equipment',pathMatch:'full',component:MainComponent},
  {path:'',pathMatch:'full',component:MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
