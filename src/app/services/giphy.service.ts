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

  constructor(private httpClient: HttpClient) { }

  getGifs(searchTerm: string): Observable<GResponse> {
    const url = `${this.apiRoute}?api_key=${this.apiKey}&q=${searchTerm}&limit=9`;
    return this.httpClient.get<GResponse>(url);
  }
}
