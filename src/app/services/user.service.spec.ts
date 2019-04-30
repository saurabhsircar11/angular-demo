import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('#getUsers observable value', (done: DoneFn) => {
    const service: UserService = TestBed.get(UserService);
    service.getUsers().subscribe(value => {
      expect(value).toEqual({
      users: [
          {
            id: 1,
            name: 'Luis Suarez',
            cardNumber: 'XXXX-XXXX-XXXX-4321',
            cardType: 'Visa'
          },
          {
            id: 2,
            name: 'Lucas Torreira',
            cardNumber: 'XXXX-XXXX-XXXX-1369',
            cardType: 'Master'
          },
          {
            id: 3,
            name: 'Edison Cavani',
            cardNumber: 'XXXX-XXXX-XXXX-8888',
            cardType: 'Visa'
          }
        ]
      });
      done();
    });
  });
});
