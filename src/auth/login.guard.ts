import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard {
  private readonly router: Router = inject(Router);
  private authService = inject(AuthService);

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    return this.authService.getAuthState().pipe(
      map((state) => {
        if (state) {
          this.router.navigate(['/']);
          return false;
        }
        return true;
      })
    );
  }
}
