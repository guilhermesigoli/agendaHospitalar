import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class DocsListService {

  baseUrl = environment.baseUrl;
  constructor(
    private http: HttpClient,
    ) {}

  getDocsList() {
    return this.http.get(`${this.baseUrl}/doctors`)
  }
}
