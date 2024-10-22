import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './card-form/card-form.component';
import { NgxMaskDirective,provideNgxMask} from 'ngx-mask';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,
    CardFormComponent,NgxMaskDirective
  ],
  providers : [
    provideNgxMask()
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'creditcard';
}
