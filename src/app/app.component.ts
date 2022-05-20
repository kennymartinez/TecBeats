import { Component } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { from, map, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Data } from './models/Data';
import { GResponse } from './models/response';
import { GiphyService } from './services/giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchTerm = '';
  response$: Observable<Data[]>;
  totalItems = 0;
  currentPage = 1;
  items: any[];

  constructor(private giphySvc: GiphyService) {}

  performSearch() {
    this.currentPage = 1;
    this.loadImagesFromGiphy();
  }

  pageChanged(event: PageChangedEvent): void {
    this.currentPage = event.page;
    this.loadImagesFromGiphy();
  }

  private loadImagesFromGiphy() {
    this.response$ = this.giphySvc.getGifs(this.searchTerm, this.currentPage).pipe(
      tap((result) => (this.totalItems = result.pagination.total_count / result.pagination.count)),
      map((result) => result.data)
    );
  }

  onItemsChanged(items: string[]) {
    if (items?.length <= 0) {
      this.response$ = from([]);
      this.searchTerm = '';
      return;
    }

    this.searchTerm = items.join(' ');
    this.performSearch();
  }
}
