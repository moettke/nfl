import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result1:number = 12;
  result2:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
