import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { ContratosusuariosRoutingModule, routerComponents } from './contratosusuarios-routing.module';


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    ContratosusuariosRoutingModule,
  ],
  declarations: [
    ...routerComponents,
  ],
})

export class ContratosusuariosModule { }
