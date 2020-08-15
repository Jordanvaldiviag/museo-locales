import { PrincipalComponent } from './principal.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '',
  component: PrincipalComponent,
  children: [
    {
      path: 'dashboard-admin',
      component: AdminDashboardComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PrincipalRoutingModule { }

export const routerComponents = [
  PrincipalComponent,
  AdminDashboardComponent,
];
