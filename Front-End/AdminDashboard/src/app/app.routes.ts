import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { SellerComponent } from './seller/seller.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ContentComponent } from './content/content.component';
import { authGuard } from './services/auth.guard';
import { CategoryComponent } from './category/category.component';
import { AddCatogeryFormComponent } from './add-catogery-form/add-catogery-form.component';

export const routes: Routes = [
  { path: '', component: SignInComponent },
  {
    path: 'loginadmin',
    canActivate: [authGuard],
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: AdmindashboardComponent },
      { path: 'addCategory', component: AddCatogeryFormComponent },
      { path: 'userslist', component: UsersListComponent },
      { path: 'content', component: ContentComponent },
      { path: 'Category', component: CategoryComponent },
    ],
  },
  { path: 'allusers', component: UserComponent },
  { path: 'regester', component: RegisterComponent },
  // { path: 'loginadmin', component: AdminComponent },

  { path: 'loginuser', component: SellerComponent },
];

// export const routes: Routes = [
//   { path: '', component: SignInComponent },
//   {
//     path: 'login',
//     canActivate: [authGuard],
//     component: AdminComponent,
//     children: [
//       {
//         path: 'admin',
//         component: AdminComponent,
//         children: [
//           { path: 'dashboard', component: AdmindashboardComponent },
//           { path: 'userslist', component: UsersListComponent },
//           { path: 'content', component: ContentComponent },
//         ],
//       },
//       { path: 'user', component: SellerComponent },
//     ],
//   },
//   { path: 'allusers', component: UserComponent },
//   { path: 'regester', component: RegisterComponent },
//   // { path: 'loginadmin', component: AdminComponent },
// ];
