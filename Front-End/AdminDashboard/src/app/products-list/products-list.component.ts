import { UsersService } from './../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  providers: [UsersService],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  constructor(
    private UService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  togle: any = true;
  togleUser() {
    this.togle = false;
  }
  products: any;
  ngOnInit(): void {
    this.UService.getAllProduct().subscribe({
      next: (data: any) => (
        console.log(data.body.data), (this.products = data.body.data)
      ),
      error: (error) => console.log(error),
    });
  }
  deleteProduct(id: any, title: any) {
    if (confirm(`you sure you want delete this product ${title}`)) {
      this.UService.deleteProduct(id).subscribe({
        complete: () => (console.log('delete this product'), location.reload()),
      });
    }
  }
  // cons() {
  //   console.log('add');
  //   this.router.navigate(['additem'], {
  //     relativeTo: this.route,
  //   });
  // }
}
