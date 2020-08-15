import { NgModule } from '@angular/core';
import { NbInputModule, NbIconModule, NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { PrincipalRoutingModule, routerComponents } from './principal-routing.module';


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    PrincipalRoutingModule,
  ],
  declarations: [
    ...routerComponents,
  ],
})
export class PrincipalModule { }
