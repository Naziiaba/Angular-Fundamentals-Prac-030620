import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>Inline text</div>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
