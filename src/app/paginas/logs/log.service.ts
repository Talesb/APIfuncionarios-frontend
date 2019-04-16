import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { OperLog } from './log.model';


@Injectable({
    providedIn: 'root'
})
export class OperLogService extends BaseResourceService<OperLog> {
    constructor(protected injector: Injector) { super('http://localhost:8080/api/log', injector, OperLog.fromJson); }
}
