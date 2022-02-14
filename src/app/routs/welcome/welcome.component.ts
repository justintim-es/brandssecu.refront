import { Component, OnInit } from '@angular/core';
import { curtainTop, curtainBottom, bottomSlide } from '../../animations/animator';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getWelcomeBottomIndex, getWelcomeIsBottom, getWelcomeToBottomIndex, getWelcomeIsToBottom, getWelcomeBottomState, getWelcomeToBottomState} from '../../redux/welcome/selectors';
import { IAction } from '../../redux/combiner';
import { RDX_WELCOME_NAVIGATE_LEFT, RDX_WELCOME_NAVIGATE_RIGHT } from '../../redux/welcome/actions';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    curtainTop,
    curtainBottom,
    bottomSlide
  ]
})
export class WelcomeComponent implements OnInit {
  isBottom: Observable<boolean>;
  isToBottom: Observable<boolean>;
  bottomIndex: Observable<number>;
  toBottomIndex: Observable<number>;
  bottomState: Observable<string>;
  toBottomState: Observable<string>;
  constructor(
    private store: Store
  ) {
    this.isBottom = this.store.select(getWelcomeIsBottom);
    this.isToBottom = this.store.select(getWelcomeIsToBottom);
    this.bottomIndex = this.store.select(getWelcomeBottomIndex);
    this.toBottomIndex = this.store.select(getWelcomeToBottomIndex);
    this.bottomState = this.store.select(getWelcomeBottomState);
    this.toBottomState = this.store.select(getWelcomeToBottomState);
  }

  ngOnInit(): void {
  }
  onRight() {
    this.store.dispatch<IAction<any>>({
      type: RDX_WELCOME_NAVIGATE_RIGHT,
      component: 'welcome'
    })
  }
  onLeft() {
    this.store.dispatch<IAction<any>>({
      type: RDX_WELCOME_NAVIGATE_LEFT,
      component: 'welcome'
    });
  }

}
