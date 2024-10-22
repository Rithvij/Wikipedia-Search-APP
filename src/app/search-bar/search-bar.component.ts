import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  term:string = '';
  @Output() submitted = new EventEmitter<string>();

  onInput(event : Event)
  {
    const valtar = event.target as HTMLInputElement;
    const val = valtar.value;

    this.term = val;
  }

  onFormSubmit(event : Event)
  {
    //to prevent browser automatically submitting
    // and preventing refresh
    event.preventDefault();
    // we are emitting the term value to parent 
    //using custom submitted emitter event
    this.submitted.emit(this.term);
  }

}
