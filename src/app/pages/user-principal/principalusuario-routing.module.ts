import { Routes, RouterModule } from '@angular/router';
import { PrincipalusuarioComponent } from './principalusuario.component';
import { DashboardusuarioComponent } from './dashboardusuario/dashboardusuario.component';
import { NgModule } from '@angular/core';


const routes: Routes = [{
  path: '',
  component: PrincipalusuarioComponent,
  children: [
    {
      path: 'principalusuarios',
      component: DashboardusuarioComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PrincipalusuarioRoutingModule { }

export const routerComponents = [
  PrincipalusuarioComponent,
  DashboardusuarioComponent,
];
