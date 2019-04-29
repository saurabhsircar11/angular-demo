import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../store/states/app.state';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { selectSelectedUser } from '../../store/selectors/user.selector';
import { GetUser } from '../../store/actions/user.actions';
@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user$ = this.store.pipe(select(selectSelectedUser));

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetUser(this.route.snapshot.params.id));
  }
}
