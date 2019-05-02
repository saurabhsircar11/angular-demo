import { Observable, of } from 'rxjs';
import { IConfig } from '../../../models/config.interface';
declare const require: any;
const Config = require('../../../../assets/config.json');
export class ConfigServiceMock {
    constructor() { }
    getConfig(): Observable<IConfig> {
        return of(Config);
    }
}
