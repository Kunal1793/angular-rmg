import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import {Accounts} from '../accounts/accounts.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-toyota-account',
  templateUrl: './toyota-account.component.html',
  styleUrls: ['./toyota-account.component.css']
})
export class ToyotaAccountComponent implements OnInit {

  ToyotaAccount: Accounts[] = [];
  DisplayCard: boolean = false;
  DisplaySingleToyota : Accounts;
  DisplayMessage: boolean = false;
  minDate: Date;
  NewStartDate: Date;
  NewEndDate: Date;



  constructor(private operationsService: OperationsService) {
    this.minDate = new Date();
   }

  ngOnInit() {
    this.operationsService.getToyotaDetails().subscribe(
      (ToyotaData) => {
        this.ToyotaAccount = ToyotaData;
        }
      );
      
  }
  
  DisplayAccount(Toyota: Accounts) {
    this.DisplayCard = true;
    this.DisplaySingleToyota = Toyota;
  }

  CancelCard() {
    this.DisplayCard = false;
  }

  SubmitForm(AccountsForm: NgForm) {
    this.operationsService.PostRequestDetails(AccountsForm.value).subscribe(
    (Data)=>{console.log(Data)});
    this.ToyotaAccount.push(AccountsForm.value);
    console.log(this.ToyotaAccount);
    AccountsForm.resetForm();
  }

  SendToCompetency(AccountsRequest: Accounts) {
    this.operationsService.ForwardRequestToCompetency(AccountsRequest);
    alert('Successfully Sent to Competency!');
    console.log(AccountsRequest);

  }

}
