import { Component, OnInit } from '@angular/core';
import { Observable, SubscriptionLike } from 'rxjs';
import { getMainIsFetch, getMainIsConfirmed } from '../../redux/main/selectors';
import { IAction } from '../../redux/combiner';
import { RDX_MAIN_FETCH_IS_CONFIRMED } from '../../redux/main/actions';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorSnackBarComponent } from '../error-snack-bar/error-snack-bar.component';
import { getUnexpectedErrorIs } from '../../redux/unexpected-error/selectors';
import { Router } from '@angular/router';
import { getMainIsRouteHome } from '../../redux/main/selectors';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isFetch: Observable<boolean>;
  isConfirmed: Observable<boolean>;
  isUnexpectedErrorSub: SubscriptionLike;
  isRouteHomeSub: SubscriptionLike;
  constructor(
    private router: Router,
    private store: Store,
    private snackbar: MatSnackBar
  ) {
    this.isFetch = this.store.select(getMainIsFetch);
    this.isConfirmed = this.store.select(getMainIsConfirmed)
    this.isUnexpectedErrorSub = this.store.select(getUnexpectedErrorIs).subscribe(res => {
      if(res) {
        this.snackbar.openFromComponent(ErrorSnackBarComponent, {
          duration: 2000,
          panelClass: ['mat-secondary']
        })
      }
    });
    this.isRouteHomeSub = this.store.select(getMainIsRouteHome).subscribe(res => {
      if (res) {
        this.router.navigate(['/home']);
      }
    })
   }

  ngOnInit(): void {
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_FETCH_IS_CONFIRMED,
      component: 'main'
    });
  }
}
