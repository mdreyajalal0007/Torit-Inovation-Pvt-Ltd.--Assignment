import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borzoi',
  templateUrl: './borzoi.component.html',
  styleUrls: ['./borzoi.component.css']
})
export class BorzoiComponent implements OnInit {

  constructor() { }
  
  image3:string ="assets/images/borzoi.jpg";

  ngOnInit(): void {
  }

}
