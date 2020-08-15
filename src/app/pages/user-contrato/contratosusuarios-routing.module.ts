import { AgregarcontratousuarioComponent } from './agregarcontratousuario/agregarcontratousuario.component';
import { ModificarcontratousuarioComponent } from './modificarcontratousuario/modificarcontratousuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratosusuariosComponent } from './contratosusuarios.component';



const routes: Routes = [{
  path: '',
  component: ContratosusuariosComponent,
  children: [
    {
      path: 'agregarcontrato',
      component: AgregarcontratousuarioComponent,
    },
    {
      path: 'modificarcontrato',
      component: ModificarcontratousuarioComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ContratosusuariosRoutingModule { }

export const routerComponents = [
  ContratosusuariosComponent,
  AgregarcontratousuarioComponent,
  ModificarcontratousuarioComponent,
];
