import { Component, input } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  email: string = '';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor() {}
}
