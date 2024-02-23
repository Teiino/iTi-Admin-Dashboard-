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

export const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'allusers', component: UserComponent },
  { path: 'regester', component: RegisterComponent },
  // { path: 'loginadmin', component: AdminComponent },
  {
    path: 'loginadmin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: AdmindashboardComponent },
      { path: 'userslist', component: UsersListComponent },
      { path: 'content', component: ContentComponent },
    ],
  },

  { path: 'loginuser', component: SellerComponent },
];
