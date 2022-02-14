import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  rdxWelcomeNavigateLeft,
  rdxWelcomeNavigateRight,
  rdxWelcomeNavigateLeftOne,
  rdxWelcomeNavigateLeftTwo,
  rdxWelcomeNavigateRightOne,
  rdxWelcomeNavigateRightTwo,
  RDX_WELCOME_NAVIGATE_LEFT_ONE,
  RDX_WELCOME_NAVIGATE_LEFT_TWO,
  RDX_WELCOME_NAVIGATE_RIGHT_ONE,
  RDX_WELCOME_NAVIGATE_RIGHT_TWO
 } from './actions';
@Injectable({
  providedIn: 'root'
})
export class WelcomeEffectsService {

  constructor(
    private actions: Actions
  ) { }

  slideLeft = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxWelcomeNavigateLeft),
      delay(1),
      map(ac => {
        return {
          type: RDX_WELCOME_NAVIGATE_LEFT_ONE,
          component: ac.component
        }
      })
    )
  })
  slideRight = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxWelcomeNavigateRight),
      delay(1),
      map(ac => {
        return {
          type: RDX_WELCOME_NAVIGATE_RIGHT_ONE,
          component: ac.component
        }
      })
    )
  })
  slideLeftOne = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxWelcomeNavigateLeftOne),
      delay(500),
      map(ac => {
        return {
          type: RDX_WELCOME_NAVIGATE_LEFT_TWO,
          component: ac.component
        }
      })
    )
  })
  slideRightOne = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxWelcomeNavigateRightOne),
      delay(500),
      map(ac => {
        return {
          type: RDX_WELCOME_NAVIGATE_RIGHT_TWO,
          component: ac.component
        }
      })
    )
  })


}
