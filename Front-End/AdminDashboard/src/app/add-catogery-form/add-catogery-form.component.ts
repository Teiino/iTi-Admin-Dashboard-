import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-catogery-form',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, ReactiveFormsModule],
  providers: [UsersService],
  templateUrl: './add-catogery-form.component.html',
  styleUrl: './add-catogery-form.component.css',
})
export class AddCatogeryFormComponent {
  constructor(private UService: UsersService) {}

  consle() {
    console.log('zeko');
  }
  vaildtionCategory = new FormGroup({
    Category: new FormControl('', [
      Validators.required,
      Validators.maxLength(32),
      Validators.minLength(3),
    ]),
    file: new FormControl('', [Validators.required]),
  });
  get category() {
    return this.vaildtionCategory.controls['Category'];
  }
  addCategory() {
    this.consle();
    console.log(this.vaildtionCategory);
    console.log(this.category.value);
    if (this.vaildtionCategory.status === 'VALID') {
      console.log('vaild');
      const categ = {
        name: this.vaildtionCategory.value.Category,
      };
      console.log(categ);
      this.UService.addNewCategory(categ).subscribe({
        complete: () => alert('add successfully'),
      });
    }
  }
}
