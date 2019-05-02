import { GetUsers } from '../../store/actions/user.actions';
import { selectUserList } from '../../store/selectors/user.selector';
import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../store/states/app.state';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';


@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$ = this.store.pipe(select(selectUserList));


  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this.router.navigate(['user', id]);
  }

}
