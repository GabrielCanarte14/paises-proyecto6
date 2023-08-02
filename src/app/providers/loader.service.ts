import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private URL: string = 'https://proyecto6-dawm-default-rtdb.firebaseio.com/collection.json';

  constructor(private http:HttpClient) { }

  getRespose() {
    return this.http.get(this.URL);
  }
}
