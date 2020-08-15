import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { PagesComponent } from './pages.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'admin',
      loadChildren: () => import('./admin-principal/principal.module')
        .then(m => m.PrincipalModule),
    },
    {
      path: 'admin/usuarios',
      loadChildren: () => import('./admin-usuarios/usuarios.module')
        .then(m => m.UsuariosModule),
    },
    {
      path: 'admin/contratos',
      loadChildren: () => import('./admin-contrato/contratoadmin.module')
        .then(m => m.ContratoadminModule),
    },
    {
      path: 'user',
      loadChildren: () => import('./user-principal/principalusuario.module')
        .then(m => m.PrincipalusuarioModule),
    },
    {
      path: 'user/contratos',
      loadChildren: () => import('./user-contrato/contratosusuarios.module')
        .then(m => m.ContratosusuariosModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: '',
      redirectTo: 'tables',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: TablesComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
