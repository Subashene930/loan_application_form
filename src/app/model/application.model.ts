export class Application {
    applicantID:       number;
    fullName:          string;
    applicationStatus: string;
    panCard:           string;
    dateOfBirth:       string;
    email:             string;
    phone:             string;
    address:           string;
    city:              string;
    state:             string;
    zipCode:           string;
    annualIncome:      number;
    employmentStatus:  string;
    creditScore:       number;
    assets:            string;
    dateApplied:       Date;
    Loans:             Loan[];
    constructor(){
        this.Loans =[];
        this.applicantID = 0 ;
        this.fullName ="";
        this.applicationStatus="new";
        this.panCard ="";
        this.dateOfBirth = " ";
        this.dateApplied = new Date() ;
        this.email="";
        this.phone="";
        this.city="";
        this.address="";
        this.state="";
        this.zipCode="";
        this.annualIncome=0 ;
        this.employmentStatus="";
        this.creditScore= 0;
        this.assets="";


    }
}

export class Loan {
    loanID:      number;
    applicantID: number;
    bankName:    string;
    loanAmount:  number;
    emi:         number;

    constructor(){
        this.loanAmount =0 ;
        this.applicantID= 0 ;
        this.bankName="";
        this.emi = 0;
        this.loanID=0
    }
}

export interface apiResponseModel{
    message: string;
    result: boolean;
    data: any;
}