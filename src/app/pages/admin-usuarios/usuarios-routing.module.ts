import { UsuariosComponent } from './usuarios.component';
import { AgregarusuariosComponent } from './agregarusuarios/agregarusuarios.component';
import { Routes, RouterModule } from '@angular/router';
import { ModificarusuariosComponent } from './modificarusuarios/modificarusuarios.component';
import { NgModule } from '@angular/core';



const routes: Routes = [{
  path: '',
  component: UsuariosComponent,
  children: [
    {
      path: 'agregarusuario',
      component: AgregarusuariosComponent,
    },
    {
      path: 'modificarusuario',
      component: ModificarusuariosComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UsuariosRoutingModule { }

export const routerComponents = [
  UsuariosComponent,
  AgregarusuariosComponent,
  ModificarusuariosComponent,
];

