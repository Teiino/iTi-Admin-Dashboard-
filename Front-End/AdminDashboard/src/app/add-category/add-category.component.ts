import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [HttpClientModule],
  providers: [UsersService],
  templateUrl: './add-category.component.html',
  styles: ``,
})
export class AddCategoryComponent {
  constructor(private UService: UsersService) {}

  addCategory(name: string) {
    console.log(name);

    let objCategory = { name };
    this.UService.addNewCategory(objCategory).subscribe({
      complete: () => {
        alert('Added Successfully');
      },
    });
  }

  getCategories() {
    this.UService.getCategories().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
