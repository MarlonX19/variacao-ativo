import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ChartService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(
      'https://query2.finance.yahoo.com/v8/finance/chart/PETR4.SA?range=1mo&interval=1d'
    );
  }
}
