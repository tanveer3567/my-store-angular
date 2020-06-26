import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name : '',
      address : ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  formSubmit(curstomerData) {
    this.cartService.clearItems();
    this.checkoutForm.reset();
    console.log(curstomerData);
    console.log("Your order has been successfully placed.");
  }

}