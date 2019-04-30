/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConfigService } from './config.service';

describe('Service: Config', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigService]
    });
  });

  it('should ...', inject([ConfigService], (service: ConfigService) => {
    expect(service).toBeTruthy();
  }));


  it('#getConfig observable value', (done: DoneFn) => {
    const service: ConfigService = TestBed.get(ConfigService);
    service.getConfig().subscribe(value => {
      expect(value).toEqual({
        adminName: 'El Maestro Tabarez',
        permission: ['users']
      });
      done();
    });
  });
});
