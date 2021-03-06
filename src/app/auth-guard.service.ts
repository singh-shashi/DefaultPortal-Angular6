import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './+auth/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this.authService.IsLoggedIn) { return true; }

        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;

        // Navigate to the login page with extras
        this.router.navigate(['/auth/login']);

        return false;
    }

    ErrorLogOut() {

        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('sessionFooterMsg');
               sessionStorage.removeItem('Sessionsocialmedia');
       // this.authService.IsLoggedIn = false;
        this.router.navigate(['/auth/login']);
        return false;
    }
}
