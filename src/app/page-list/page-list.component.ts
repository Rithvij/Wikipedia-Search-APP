import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.css'
})
export class PageListComponent {

  @Input() pages=[];
  //angular knows onerror is used for xss attacks
  //hence removes it in browser (can be inspected)
  //it will automatically escape malicious html
  //XSS attacks
  xss='<img src="" onerror="alert(123)"  />';

}
