// // auth.guard.ts
// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router) {}

//   canActivate(): boolean {
//     // Check if the user is authenticated (e.g., check if the token is present)
//     const isAuthenticated = localStorage.getItem('access_token') !== null;

//     if (!isAuthenticated) {
//       // Redirect to the login page if not authenticated
//       this.router.navigate(['/login']);
//     }

//     return isAuthenticated;
//   }
// }
