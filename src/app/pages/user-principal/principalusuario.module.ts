import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { PrincipalusuarioRoutingModule, routerComponents } from './principalusuario-routing.module';
import { NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';


@NgModule({
  imports: [
    ThemeModule,
    NbIconModule,
    NbInputModule,
    NbCardModule,
    PrincipalusuarioRoutingModule,
  ],
  declarations: [
    ...routerComponents,
  ],
})

export class PrincipalusuarioModule { }

