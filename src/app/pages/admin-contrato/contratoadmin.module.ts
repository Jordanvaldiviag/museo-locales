import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { routerComponents, ContratoadminRoutingModule } from './contratoadmin-routing.module';


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    ContratoadminRoutingModule,
  ],
  declarations: [
    ...routerComponents,
  ],
})
export class ContratoadminModule { }

