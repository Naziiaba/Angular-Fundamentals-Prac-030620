import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>{{2+2}}</h2>
  <h2> {{"Welcome " + name}}</h2>
  <h2> {{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h3>{{name.toLowerCase()}}</h3>
  <h2> {{greetUser()}}</h2>
  <input [id]="myId" type="text" value="test">
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public myId ="testId";
  public name = "Jefferson";
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
