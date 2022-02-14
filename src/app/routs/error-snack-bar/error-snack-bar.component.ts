import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUnexpectedErrorError } from '../../redux/unexpected-error/selectors';
@Component({
  selector: 'app-error-snack-bar',
  templateUrl: './error-snack-bar.component.html',
  styleUrls: ['./error-snack-bar.component.css']
})
export class ErrorSnackBarComponent implements OnInit {
  fetchErrorMessage: Observable<string>;
  constructor(
    private store: Store
  ) {
    this.fetchErrorMessage = this.store.select(getUnexpectedErrorError);
  }

  ngOnInit(): void {
  }

}
