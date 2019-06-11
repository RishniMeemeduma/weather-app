import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor( private http:HttpClient) { }

  getlocation(location) {
    return this.http.get('http://api.apixu.com/v1/current.json?key=5cea155cedf74d7aabd65414191106&q=' + location);
  }
}
