import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FuncionarioFormComponent, FuncionarioListComponent],
  imports: [
    SharedModule,
    FuncionariosRoutingModule
  ]
})
export class FuncionariosModule { }
