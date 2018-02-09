import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  private baseUrl = "http://localhost:3000";

  constructor(private http: Http) { }

  get(uri: string): Promise<Response> {
    return this.http.get(`${this.baseUrl}${uri}`).toPromise();
  }

}
