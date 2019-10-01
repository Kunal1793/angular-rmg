import { Component, OnInit } from '@angular/core';
import {Competency} from './compentency.model';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-competency',
  templateUrl: './competency.component.html',
  styleUrls: ['./competency.component.css']
})
export class CompetencyComponent implements OnInit {
  OnProjectEmployees: Competency[];
  products: Competency[] = [];
  filteredProducts: Competency[];

  constructor(private operationService: OperationsService) { }

  ngOnInit() {
    this.operationService.GetProjectEmployees().subscribe(
      (ProjectData)=> {
        this.OnProjectEmployees = ProjectData
        this.filteredProducts = this.OnProjectEmployees
      });

  }
  _listFilter: string;
  get listFilter():string{
    return this._listFilter;
}
set listFilter(value: string){
  
    this._listFilter = value;
    this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.OnProjectEmployees;
}
 

  
performFilter(filterBy: string): Competency[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.OnProjectEmployees.filter((OnProjectEmployees: Competency) => 
    OnProjectEmployees.EmployeeName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
  OnBench(){
    this.operationService.GetOnBenchEmployees().subscribe(
      (OnBenchData)=> {
        this.filteredProducts = OnBenchData
      });
  }
  OnProject(){
    this.operationService.GetProjectEmployees().subscribe(
      (ProjectData)=> {
        this.filteredProducts = ProjectData
      });
  }
  OnTraining(){
    this.operationService.GetOnTraningEmployees().subscribe(
      (OnTrainingData)=> {
        this.filteredProducts = OnTrainingData
      });
  }
}
