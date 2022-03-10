import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountyCollection } from '../interfaces/counties';

const FILE_PATH = '/assets/data/counties.json';

@Injectable({
  providedIn: 'root'
})
export class CountiesService {
  constructor(private http: HttpClient) { }

  /**
   * County collections
   * @returns Collection of county information
   */
  getCountyCollection$() {
    return this.http.get<CountyCollection[]>(FILE_PATH);
  }
}
