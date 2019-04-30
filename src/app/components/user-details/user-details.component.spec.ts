/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    component.user = {
      id: 1,
      name: 'Luis Suarez',
      cardNumber: 'XXXX-XXXX-XXXX-4321',
      cardType: 'Visa'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <p> with "name" ', () => {
    const paraElementDe: DebugElement = fixture.debugElement;
    const paragraphDe = paraElementDe.query(By.css('p'));
    const p: HTMLElement = paragraphDe.nativeElement;
    expect(p.textContent).toEqual('Name: Luis Suarez');
  });

  it('should have <p> with "card number"', () => {
    const paraElementDe: DebugElement = fixture.debugElement;
    const paragraphDe = paraElementDe.query(By.css('.card-number'));
    const p: HTMLElement = paragraphDe.nativeElement;
    expect(p.textContent).toEqual('Card Number: XXXX-XXXX-XXXX-4321');
  });

  it('should have <p> with "card type"', () => {
    const paraElementDe: DebugElement = fixture.debugElement;
    const paragraphDe = paraElementDe.query(By.css('.card-type'));
    const p: HTMLElement = paragraphDe.nativeElement;
    expect(p.textContent).toEqual('Card Type: Visa');
  });
});
