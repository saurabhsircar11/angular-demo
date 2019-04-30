import { IAppState } from './store/states/app.state';
import { appReducers } from './store/reducers/app.reducers';
import { StoreModule, Store } from '@ngrx/store';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UsersComponent as UsersContainerComponent } from './containers/users/users.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './containers/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router';

describe('AppComponent', () => {
  const routes: Routes = [
    { path: 'users', component: UsersContainerComponent },
    { path: 'user/:id', component: UserComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full' }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UsersContainerComponent,
        UsersComponent,
        UserComponent,
        UserDetailsComponent
      ],
      imports: [RouterModule.forRoot(routes), StoreModule.forRoot(appReducers)]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-demo');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('ANGULAR-DEMO');
  });
});
