import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chow',
  templateUrl: './chow.component.html',
  styleUrls: ['./chow.component.css']
})
export class ChowComponent implements OnInit {

  constructor() { }

  image5:string ="assets/images/chow.jpg";

  ngOnInit(): void {
  }

}
