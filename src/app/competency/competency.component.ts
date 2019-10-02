import { Component, OnInit } from '@angular/core';
import {Competency} from './compentency.model';
import { OperationsService } from '../operations.service';
import { Accounts } from '../accounts/accounts.model';

@Component({
  selector: 'app-competency',
  templateUrl: './competency.component.html',
  styleUrls: ['./competency.component.css']
})
export class CompetencyComponent implements OnInit {
  OnProjectEmployees: Competency[];
  SingleAccountRequest: Accounts;
  ShowRequest = false;


  constructor(private operationService: OperationsService) { }

  ngOnInit() {
    this.operationService.GetProjectEmployees().subscribe(
      (ProjectData)=> {
        this.OnProjectEmployees = ProjectData
      });

  }
  OnBench(){
    this.operationService.GetOnBenchEmployees().subscribe(
      (OnBenchData)=> {
        this.OnProjectEmployees = OnBenchData
      });
  }

  OnProject(){
    this.operationService.GetProjectEmployees().subscribe(
      (ProjectData)=> {
        this.OnProjectEmployees = ProjectData
      });
  }
  OnTraining(){
    this.operationService.GetOnTraningEmployees().subscribe(
      (OnTrainingData)=> {
        this.OnProjectEmployees = OnTrainingData
      });
  }

  DisplayIncomingRequest() {
    this.ShowRequest = !this.ShowRequest;
    this.SingleAccountRequest = this.operationService.DisplayAccountsRequest();
    console.log(this.SingleAccountRequest);

  }
}
