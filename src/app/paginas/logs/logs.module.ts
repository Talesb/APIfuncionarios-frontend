import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogsRoutingModule } from './logs-routing.module';
import { LogListComponent } from './log-list/log-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LogListComponent],
  imports: [
    SharedModule,
    LogsRoutingModule
  ]
})
export class LogsModule { }
