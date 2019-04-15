import { Component, OnInit, Injector } from '@angular/core';
import { Funcionario } from '../funcionario.model';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { FuncionarioService } from '../funcionario.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent extends BaseResourceFormComponent<Funcionario>  {

  constructor(private funcionarioService: FuncionarioService, protected injector: Injector) {
    super(injector, new Funcionario(), funcionarioService, Funcionario.fromJson);
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(2)]],
      idade: [null, [Validators.required, Validators.minLength(2)]],
      cargo: [null, [Validators.required, Validators.minLength(2)]],
    });
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Novo Funcionario';
  }

  protected editionPageTitle(): string {
    const funcionarioName = this.resource.nome || '';
    return 'Editando o Funcionario: ' + funcionarioName;
  }

}
