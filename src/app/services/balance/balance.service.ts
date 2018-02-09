import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Http, Response } from '@angular/http';

@Injectable()
export class BalanceService {

  constructor(private httpService: HttpService) { }

  getBalances(type?: string): Promise<Response> {
    const uri = type ? `/balances?type=${type}` : '/balances';
    return this.httpService.get(uri);
  }

}
