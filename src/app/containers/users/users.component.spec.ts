import { IAppState } from '../../store/states/app.state';
import { appReducers } from '../../store/reducers/app.reducers';
import { StoreModule, Store } from '@ngrx/store';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsersComponent } from './users.component';
import { UsersComponent as UserTableComponent } from '../../components/users/users.component';
import { Router } from '@angular/router';
describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let store: Store<IAppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent, UserTableComponent],
      imports: [StoreModule.forRoot(appReducers)],
      providers: [{ provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
