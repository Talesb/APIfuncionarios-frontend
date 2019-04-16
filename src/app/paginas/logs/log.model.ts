import { BaseResourceModel } from 'src/app/shared/model/base-resource.model';

export class OperLog extends BaseResourceModel {
    constructor(public id?: number, public dataEvento?: Date, public operacao?: string, public path?: string) {
        super();
    }

    static fromJson(jsonData: any): OperLog {
        return Object.assign(new OperLog(), jsonData);
    }

}
