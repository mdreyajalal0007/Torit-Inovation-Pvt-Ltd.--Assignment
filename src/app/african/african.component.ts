import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-african',
  templateUrl: './african.component.html',
  styleUrls: ['./african.component.css']
})
export class AfricanComponent implements OnInit {

  constructor() { }

  image1:string ="assets/images/african.jpg"

  ngOnInit(): void {
  }

}
