import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  toshow:string="0";
  currentvalue="";
  
  inputno(value:string){
  this.currentvalue = this.currentvalue + value;
  this.toshow = this.currentvalue;
  }
  evaluate(){
    if(this.currentvalue.slice(-1)=="+" || this.currentvalue.slice(-1)=="-" || this.currentvalue.slice(-1)=="*"|| this.currentvalue.slice(-1)=="/" || this.currentvalue.slice(-1)=="%"){
      this.currentvalue=this.currentvalue.slice(0,-1);
      this.toshow = this.currentvalue;
    }
    if(this.currentvalue.charAt(0)=="0"){
      this.currentvalue=this.currentvalue.slice(1,);
    }
    this.toshow = eval(this.currentvalue);
    this.currentvalue = this.toshow;
  }
  AllClear(){
    this.currentvalue=" ";
    this.toshow="0";
  }
  back(){
    this.currentvalue = this.currentvalue.slice(0,-1);
    this.toshow = this.currentvalue;
    if(this.currentvalue==""){
      this.toshow="0";
    }
  }
  evaluate2(solvestring:string){
    if(solvestring.slice(-1)=="+" || solvestring.slice(-1)=="-" || solvestring.slice(-1)=="*"|| solvestring.slice(-1)=="/" || solvestring.slice(-1)=="%"){
      solvestring=solvestring.slice(0,-1);
      this.toshow = solvestring;
    }
    if(solvestring.charAt(0)=="0"){
      solvestring=solvestring.slice(1,);
    }
    this.toshow = eval(solvestring);
    this.currentvalue = this.toshow;
  }
}
