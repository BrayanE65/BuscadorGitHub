import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';
  private apiKey = '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';

  constructor(private http: HttpClient) {}

  searchUsers(query: string): Observable<any> {
    const url = `${this.apiUrl}/search/users?q=${query}`;
    return this.http.get(url, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });
  }
}