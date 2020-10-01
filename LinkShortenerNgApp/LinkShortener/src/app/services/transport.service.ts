import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransportService {

  constructor(private http: HttpClient) {}

  public sendGet<T>(url: string, params: HttpParams): Promise<T> {
    return this.http.get<T>(`${environment.apiUrl}${url}`, { params}).toPromise();
  }

  public sendPost<T>(url: string, request: any): Promise<T> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    
    return this.http.post<T>(`${environment.apiUrl}${url}`, JSON.stringify(request), httpOptions).toPromise();
  }
}
