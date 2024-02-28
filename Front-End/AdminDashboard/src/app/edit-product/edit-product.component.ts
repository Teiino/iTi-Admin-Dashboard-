import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  regValidations = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  get titleValid() {
    return this.regValidations.controls.title;
  }

  get descriptionValid() {
    return this.regValidations.controls.description;
  }
  obj = {};
  submit() {
    var title1 = false;
    var desc = false;
    if (this.regValidations.valid) {
      alert('success');
      title1 = true;
      desc = true;

      this.obj = {
        title: this.regValidations.value.title,
        description: this.regValidations.value.description,
      };
    } else if (this.regValidations.controls.title.valid) {
      title1 = true;
    } else if (this.regValidations.controls.description.valid) {
      desc = true;
    }
    alert('Failed');
  }
}
