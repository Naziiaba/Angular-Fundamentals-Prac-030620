import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div> {{name}} Working on a new project </div>
  <h2>{{2+2}}</h2>
  <h2> {{"Welcome " + name}}</h2>
  <h2> {{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2> {{greetUser()}}
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Jefferson";
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
