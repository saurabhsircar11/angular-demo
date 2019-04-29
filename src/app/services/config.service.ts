import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { IConfig } from '../models/config.interface';
declare const require: any;
const Config = require('../../assets/config.json');
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getConfig(): Observable<IConfig> {
    return of(Config);
  }
}
