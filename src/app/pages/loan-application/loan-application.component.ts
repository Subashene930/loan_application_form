import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { apiResponseModel, Application, Loan } from '../../model/application.model';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {

  application :Application = new Application();
  loan : Loan = new Loan();
  apiModel :apiResponseModel | undefined;

  masterSrv = inject(MasterService)
  responseMessage!: string;

  addLoan(){
    const strObj = JSON.stringify(this.loan)
    const newObj = JSON.parse(strObj)
    this.application.Loans.unshift(newObj);
  }

  onSubmit(){
    //debugger;
    this.masterSrv.createApplication(this.application).subscribe((response)=>{
      console.log("response",response)
      this.responseMessage = response.message;
      this.apiModel = response
      console.log(this.apiModel)
      console.log(response)
      if(response.result){
        alert("loan application success")
      }else{
        alert(response.message)
      }
    })
  }

}
