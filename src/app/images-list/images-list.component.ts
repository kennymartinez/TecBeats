import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../models/Data';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent {
  @Input() images: Data[];
}
