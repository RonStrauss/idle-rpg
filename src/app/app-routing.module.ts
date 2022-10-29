import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentComponent } from './Components/equipment/equipment.component';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
  { path: 'info', pathMatch: 'full', component: MainComponent },
  { path: 'stats', pathMatch: 'full', component: MainComponent },
  { path: 'equipment', pathMatch: 'full', component: EquipmentComponent },
  { path: '', pathMatch: 'full', component: MainComponent,children:[

  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
