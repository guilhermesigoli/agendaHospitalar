import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
  })
  export class ProfileService {
    baseUrl = environment.baseUrl;
  constructor(
    private http: HttpClient,
  ) { }

  delete(id) {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }

  update(user) {
    return this.http.post(`${this.baseUrl}/users`, {
      ...user
    })
  }
   }