import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GResponse } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private apiRoute = environment.giphyApiUrl;
  private apiKey = environment.giphyApiKey;
  private offset_size = 9;
  constructor(private httpClient: HttpClient) { }

  getGifs(searchTerm: string, currentPage: number): Observable<GResponse> {
    const offset = (currentPage - 1) * this.offset_size;
    const url = `${this.apiRoute}?api_key=${this.apiKey}&q=${searchTerm}&limit=${this.offset_size}&offset=${offset}`;return this.httpClient.get<GResponse>(url);
  }
}
