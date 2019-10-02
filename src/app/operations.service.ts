import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Competency} from './competency/compentency.model';
import {Accounts} from './accounts/accounts.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private Http: HttpClient) { }


  AccountsData: Accounts;

  GetProjectEmployees() {
    return this.Http.get<Competency[]>('assets/OnProject.json');
  }

  getToyotaDetails() {
    return this.Http.get<Accounts[]>('assets/Toyota.json');
  }

  GetOnBenchEmployees() {
    return this.Http.get<Competency[]>('assets/OnBench.json');
  }
  GetOnTraningEmployees() {
    return this.Http.get<Competency[]>('assets/OnTraining.json');
  }

  PostRequestDetails(RequestData: Accounts) {
    return this.Http.post<Accounts>('http://localhost:3000/', RequestData);
  }

  ForwardRequestToCompetency(ForwardRequest: Accounts) {
    this.AccountsData = ForwardRequest
  }

  DisplayAccountsRequest() {
    return this.AccountsData;
  }


}

