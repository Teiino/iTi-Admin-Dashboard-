import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-edit-form',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  providers: [UsersService],
  templateUrl: './user-edit-form.component.html',
  styleUrl: './user-edit-form.component.css',
})
export class UserEditFormComponent implements OnInit {
  [x: string]: any;
  constructor(
    private UService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  id: any;
  userData: any;
  idParams: any = this.route.paramMap.source?.subscribe({
    next: (id: any) => (this.id = id.id),
  });
  ngOnInit() {
    this.UService.editeUser(this.id).subscribe({
      next: (data: any) => (this.userData = data.body.data),
    });
  }
  cons() {
    console.log(this.userData);
  }
  submit(name: any, role: any, email: any, phone: any, active: any) {
    const obj = {
      email: email,
      isActive: active,
      name: name,
      phonenumber: phone,
      role: role,
    };
    console.log(obj);
    this.UService.updateUser(this.id, obj).subscribe({
      complete: () => location.reload(),
    });
  }
}
