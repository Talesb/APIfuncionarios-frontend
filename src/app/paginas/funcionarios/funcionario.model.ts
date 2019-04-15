import { BaseResourceModel } from 'src/app/shared/model/base-resource.model';

export class Funcionario extends BaseResourceModel {
    constructor(public id?: number, public nome?: string, public idade?: number,public cargo?: string) {
        super();
    }

    static fromJson(jsonData: any): Funcionario {
        return Object.assign(new Funcionario(), jsonData);
    }

}
