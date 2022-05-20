import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchTermChanged = new EventEmitter();

  items: any[] = [];
  mappedItems: string[] = [];

  onItemsChanged(addedItem: any) {
    this.mappedItems.push(addedItem.value);
    this.searchTermChanged.emit(this.mappedItems);
  }

  onItemRemoved(removedItem: any) {
    this.mappedItems = this.mappedItems.filter(i => i !== removedItem.value);
    this.searchTermChanged.emit(this.mappedItems);
  }
}
