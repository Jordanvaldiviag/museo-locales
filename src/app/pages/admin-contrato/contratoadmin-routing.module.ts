import { ContratosadminComponent } from './contratosadmin.component';
import { AgregarcontratoadminComponent } from './agregarcontratoadmin/agregarcontratocomponent.component';
import { ModificarcontratoadminComponent } from './modificarcontratoadmin/modificarcontratoadmin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: ContratosadminComponent,
  children: [
    {
      path: 'agregarcontrato',
      component: AgregarcontratoadminComponent,
    },
    {
      path: 'modificarcontrato',
      component: ModificarcontratoadminComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ContratoadminRoutingModule { }

export const routerComponents = [
  ContratosadminComponent,
  AgregarcontratoadminComponent,
  ModificarcontratoadminComponent,
];


