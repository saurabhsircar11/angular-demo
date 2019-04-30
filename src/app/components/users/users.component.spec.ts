import { IUser } from './../../models/user.interface';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  const mockData = [
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
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    component.users = mockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit userselected event', () => {
    const comp = new UsersComponent();
    const users: IUser[] = mockData;
    comp.users = users;
    comp.userSelected.subscribe(selectedUser =>
      expect(selectedUser).toEqual(1));
    comp.navigateToUser(1);
  });

  it('should display table', () => {
    const tableRowElements: HTMLElement = fixture.nativeElement.querySelectorAll('tr');
    const headerRow = tableRowElements[0];
    expect(headerRow.cells[0].innerHTML).toEqual('#');
    expect(headerRow.cells[1].innerHTML).toBe('Name');
    expect(headerRow.cells[2].innerHTML).toBe('Card Number');
    expect(headerRow.cells[3].innerHTML).toBe('Card Type');

    const row1 = tableRowElements[1];
    expect(row1.cells[0].innerHTML).toBe('1');
    expect(row1.cells[1].innerHTML).toBe('Luis Suarez');
    expect(row1.cells[2].innerHTML).toBe('XXXX-XXXX-XXXX-4321');
    expect(row1.cells[3].innerHTML).toBe('Visa');
  });
});
