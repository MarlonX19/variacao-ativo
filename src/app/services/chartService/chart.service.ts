import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ChartService {
  baseUrl = 'https://variacao-ativo-virid.vercel.app/api';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
