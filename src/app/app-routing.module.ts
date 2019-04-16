import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './paginas/home/home.module#HomeModule' },
  { path: 'funcionarios', loadChildren: './paginas/funcionarios/funcionarios.module#FuncionariosModule' },
  { path: 'logs', loadChildren: './paginas/logs/logs.module#LogsModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
