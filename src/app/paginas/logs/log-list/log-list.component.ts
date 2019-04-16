import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { OperLog } from '../log.model';
import { OperLogService } from '../log.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent extends BaseResourceListComponent<OperLog> {
  constructor(private operLogService: OperLogService) {
    super(operLogService);
  }

}
