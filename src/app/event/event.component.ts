import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
    
    <h2>Welcome {{name}}</h2>
    <h3>{{9*9}}</h3>
    <h3>{{"WElcome " + name}}</h3>
    <h3 class="text-success">{{"Length " + name.length}}</h3>
    <h3>{{"Upper " + name.toUpperCase()}}</h3>
    <h3>{{"Greeting " + greetUser()}}</h3>
    <h3>{{"URL " + siteUrl}}</h3>
    <input type="text" value="Prasad">
    <input [id] = "myId"   type="text" value="Prasad">
    <input id= "{{myId}}"   type="text" value="Prasad">

    <input bind-disabled= "dis"   type="text" value="Prasad">

    <h2 [class] = [sucClass] > Style Class Binding</h2>

    <button (click)="onClick($event)">Prasad Click</button>
  {{greeting}}


    <input #myinput type="text">
    <button (click)="logMessage(myinput)">Log</button>
  {{msg}}
  <br>
  <input [(ngModel)]="myname" type="text">
  {{myname}}
   `,

    styles: [`

    .text-success {
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
    `]
})
export class EventComponent implements OnInit{
  public name = "Prasad";
  public siteUrl = window.location.href;
  public myId = "testId";
  public dis = false;
  public hasError = false;
  public isSpecial = true;
  public myname: string="";
  public msg ="";

  public ev = "";
  messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public greeting ="";
  public highlightColor = "purple";
  public sucClass = "text-success";

  messageSyles = {
    color: "blue",
    fontStyle: "italic"
  }
  constructor (){

  }

  ngOnInit() {
    
  }

  greetUser(){
    return "Hello " + this.name;
  }

  onClick(event){
    console.log("You clicked mouse...");
    this.greeting = event.type;
    console.log(event);
  }

  logMessage(val){
    this.msg = val
    console.log(val);
  }
}
