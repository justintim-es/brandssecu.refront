import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getHomeIsFetch, getHomeIsBoarded } from '../../redux/home/selectors';
import { IAction } from '../../redux/combiner';
import { RDX_HOME_FETCH_IS_BOARDED } from '../../redux/home/actions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isFetch: Observable<boolean>;
  isBoarded: Observable<boolean>;
  constructor(
    private store: Store
  ) {
    this.isFetch = this.store.select(getHomeIsFetch);
    this.isBoarded = this.store.select(getHomeIsBoarded);
  }

  ngOnInit(): void {
    this.store.dispatch<IAction<any>>({
      type: RDX_HOME_FETCH_IS_BOARDED,
      component: 'home'
    });
  }

}
