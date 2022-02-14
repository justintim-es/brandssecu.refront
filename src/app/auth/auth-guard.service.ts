import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from   '@ngrx/store';
import { getLoginToken } from '../redux/login/selectors';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  token: string;
  constructor(
    private router: Router,
    private store: Store
  ) {
    this.token = '';
    this.store.select(getLoginToken).subscribe(res => {
      this.token = res;
    })
   }
   canActivate() {
     if(this.token == '') {
       this.router.navigate(['/login-brand']);
       return false
     };
     return true;
   }
}
