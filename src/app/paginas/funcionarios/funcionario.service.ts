import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Funcionario } from './funcionario.model';

@Injectable({
    providedIn: 'root'
})
export class FuncionarioService extends BaseResourceService<Funcionario> {
    constructor(protected injector: Injector) { super('http://localhost:8080/api/funcionario', injector, Funcionario.fromJson); }
}
