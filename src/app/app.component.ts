import { Component } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { TagModel } from 'ngx-chips/core/tag-model';
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
  totalItems = 0;
  currentPage = 1;
  items: any[];

  constructor(private giphySvc: GiphyService) {
  }

  performSearch() {
    this.currentPage = 1;
    this.loadImagesFromGiphy();
  }

  pageChanged(event: PageChangedEvent): void {
    this.currentPage = event.page;
    this.loadImagesFromGiphy();
  }

  private loadImagesFromGiphy() {
    this.giphySvc.getGifs(this.searchTerm, this.currentPage).subscribe(data => {
      this.response = data;
      this.totalItems = data.pagination.total_count / data.pagination.count;
    });
  }

  onItemsChanged(addedItem: any) {
    if (!this.items || !this.items.length) {
      this.response = null;
      this.searchTerm = '';
      return;
    }

    this.searchTerm = this.items.map(i => i.value).join(' ');
    this.performSearch();
  }
}
