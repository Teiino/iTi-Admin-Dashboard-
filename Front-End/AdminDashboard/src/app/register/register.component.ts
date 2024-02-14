import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  years: number[] = [];
  days: number[] = [];

  constructor() {}

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    console.log(this.days);
    for (let i = 1990; i <= currentYear; i++) {
      this.years.push(i);
    }

    for (let i = 1; i <= 31; i++) {
      console.log(i);
      this.days.push(i);
    }
  }
}
