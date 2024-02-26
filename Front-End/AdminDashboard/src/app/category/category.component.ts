import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [UsersService],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  constructor(private UService: UsersService) {}
  allCategory: any;
  ngOnInit(): void {
    this.UService.tesst().subscribe({
      next: (cat) => (
        console.log(cat.body.data), (this.allCategory = cat.body.data)
      ),
    });
    // this.UService.getCategories().subscribe({
    //   next: (data: any) =>
    //     //  console.log(data.data),
    //     (this.allCategory = data.data),
    // });
  }
  deleteCategory(id: any) {
    if (confirm('are sure you want to delete category ')) {
      this.UService.deleteCategory(id).subscribe();
    }
  }
  consel() {
    console.log('aaaaa');
  }
}
