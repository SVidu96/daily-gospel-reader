import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://publication.evangelizo.ws/AM/days/';
const URL = '?from=gospelComponent';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public get(myDate: any): Observable<any> {
    return this.http.get(API_URL + myDate + URL).pipe(map((res) => res));
  }
}
// /api/users
