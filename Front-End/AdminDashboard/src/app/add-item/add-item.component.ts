import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [
    AddItemComponent,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UsersService],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
})
export class AddItemComponent implements OnInit {
  constructor(private UService: UsersService) {}
  category: any;
  ngOnInit(): void {
    this.UService.tesst().subscribe({
      next: (cat) => (this.category = cat.body.data),
    });
  }
  // title = "";
  // description = "";
  // quantity = "";
  price: number = 0;
  // offer = "";
  Discount: any = '';
  dis: any = '';
  temp: number = 0;
  PriceAfterdiscount: any;
  // final_price = "";
  // Category = "";
  // // subcategory = "";
  // brand:string="";
  color: number[] = [];

  regValidation = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    quantity: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    // discount: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    // color: new FormControl("", Validators.required)
  });

  get Title() {
    // console.log("this is a title");
    return this.regValidation.controls.title;
  }
  get Description() {
    // console.log("this is a desc");
    return this.regValidation.controls.description;
  }
  get Quantity() {
    // console.log("this is a quantity");
    return this.regValidation.controls.quantity;
  }
  get Price() {
    // console.log("this is a price");
    return this.regValidation.controls.price;
  }
  // get discount() {
  //   // console.log("this is a discount");
  //   return this.regValidation.controls.discount;
  // }
  get Category() {
    // console.log("this is a category");
    return this.regValidation.controls.category;
  }
  get Color() {
    // console.log("this is a PriceAfterDiscount");
    return this.regValidation.controls;
  }

  show() {
    console.log(' discount= ' + this.dis);
    console.log(' price= ' + this.regValidation.controls.price.value);

    this.temp = Number(this.dis / 100);
    this.PriceAfterdiscount =
      Number(this.regValidation.controls.price.value) -
      Number(this.regValidation.controls.price.value) * this.temp;
    console.log('final price= ' + this.PriceAfterdiscount);
  }

  submit() {
    // console.log(this.regValidation);
    if (this.regValidation.valid) {
      alert('success');
      const obj = {
        title: this.regValidation.value.title,
        description: this.regValidation.value.description,
        quantity: this.regValidation.value.quantity,
        price: this.regValidation.value.price,
        // discount: this.regValidation.value.discount,
        category: this.regValidation.value.category,
        // color:this.Color
        imgCover: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      };
      console.log(obj);
      this.UService.addNewProduct(obj).subscribe({
        complete: () => location.reload(),
      });
      // console.log(this.obj.Description.description);
    } else alert('Failed');
    console.log(this.regValidation);
  }
}
