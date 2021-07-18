import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-akita',
  templateUrl: './akita.component.html',
  styleUrls: ['./akita.component.css']
})
export class AkitaComponent implements OnInit {

  constructor() { }

  image2:string = "assets/images/akita.jpg";

  ngOnInit(): void {
  }

}
