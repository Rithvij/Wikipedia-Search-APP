import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NgxMaskDirective],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
 @Input() control : FormControl;
 @Input() label : string;

  showErrors()
  {
    const {dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }

}
