import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { PageListComponent } from "./page-list/page-list.component";
import { WikipediaService } from './wikipedia.service';
//import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchBarComponent, 
    PageListComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wsearch';
  pages=[];

  //wiki will be instance of wikiservice
  //here wiki is a property of wikiservice
  constructor(private wiki:WikipediaService){}

  onTerm(term:string)
  {
    this.wiki.search(term).subscribe((response) =>{
      this.pages=response;
    });
  }

}

/* stores the ref to store as dependencies and provide
the instances of these (class, service etc), 
only one instance no matter many times its getting called   
*/

