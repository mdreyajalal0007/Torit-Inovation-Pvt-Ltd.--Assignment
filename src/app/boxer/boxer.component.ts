import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxer',
  templateUrl: './boxer.component.html',
  styleUrls: ['./boxer.component.css']
})
export class BoxerComponent implements OnInit {

  constructor() { }

  image4:string ="assets/images/boxer.jpg"

  ngOnInit(): void {
  }

}
