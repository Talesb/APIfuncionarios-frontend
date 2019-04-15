import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';

const routes: Routes = [
  { path: '', component: FuncionarioListComponent },
  { path: 'new', component: FuncionarioFormComponent },
  { path: ':id/edit', component: FuncionarioFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
