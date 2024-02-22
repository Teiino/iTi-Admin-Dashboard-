import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-brand',
  standalone: true,
  imports: [HttpClientModule],
  providers: [UsersService],
  templateUrl: './add-brand.component.html',
  styles: ``,
})
export class AddBrandComponent {
  constructor(private UService: UsersService) {}
  addBrand(name: string) {
    console.log(name);

    let objBrand = { name };
    this.UService.addNewBrand(objBrand).subscribe({
      complete: () => {
        alert('Added Successfully');
      },
    });
  }

  getBrands() {
    this.UService.getBrands().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
