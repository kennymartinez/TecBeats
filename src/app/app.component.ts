import { Component } from '@angular/core';
import { GResponse } from './models/response';
import { GiphyService } from './services/giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerm = '';
  response: GResponse;

  constructor(private giphySvc: GiphyService) {
  }

  performSearch() {
    this.giphySvc.getGifs(this.searchTerm).subscribe(data => {
      this.response = data;
    })
  }
}
