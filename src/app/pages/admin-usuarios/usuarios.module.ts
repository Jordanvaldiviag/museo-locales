
import { NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { routerComponents, UsuariosRoutingModule } from './usuarios-routing.module';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    UsuariosRoutingModule,
  ],
  declarations: [
  ...routerComponents,
  ],
})
export class UsuariosModule { }
