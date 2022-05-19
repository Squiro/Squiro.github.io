import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GUIHomeComponent } from './home/gui-home.component';

const routes: Routes = [
  {
    path: '',
    component: GUIHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GUIRoutingModule { }
