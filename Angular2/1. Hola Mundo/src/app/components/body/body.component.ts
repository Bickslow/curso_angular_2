import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  mostrar:boolean = false;
  nombres:string[] =["Andrés", "Diego", "Junior", "Daniel"]
  constructor() { }

  ngOnInit() {
  }

}
