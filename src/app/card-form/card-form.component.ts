import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from "../input/input.component";
import { DateFormControl } from '../date-form-control';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-card-form',
  standalone:true,
  imports: [ReactiveFormsModule, CommonModule, InputComponent, CardComponent],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {
  cardForm = new FormGroup(
    {
      name : new FormControl('',
        [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30)
      ]),
      cardNumber : new FormControl('',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16)
        ]
      ),
      expiration : new DateFormControl('',
        [
          Validators.required,
          Validators.pattern(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)
        ]
      ),
      securityCode : new FormControl('',
        [
          Validators.required,
          Validators.pattern(/^\d{3}$/)
        ]
      )
    }
  );

  onSubmit()
  {
    console.log('Form Submitted');
  }
  onResetClick()
  {
    //this reset by default sets the values to NULL
    this.cardForm.reset();
  }
}
