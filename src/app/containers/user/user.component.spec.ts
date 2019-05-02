import { Router, RouterModule } from '@angular/router';
import { appReducers } from '../../store/reducers/app.reducers';
import { UserDetailsComponent } from '../../components/user-details/user-details.component';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserComponent } from './user.component';
import { Store, StoreModule } from '@ngrx/store';
import { Observable, of } from 'rxjs';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent, UserDetailsComponent],
      imports: [StoreModule.forRoot(appReducers), RouterTestingModule.withRoutes([
        { path: 'user/:id', component: UserComponent },
        { path: '', redirectTo: '/users', pathMatch: 'full' }
      ])],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user$ = of({
      id: 1,
      name: 'Luis Suarez',
      cardNumber: 'XXXX-XXXX-XXXX-4321',
      cardType: 'Visa'
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
