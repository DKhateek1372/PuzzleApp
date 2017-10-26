import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzleapp',
  templateUrl: './puzzleapp.component.html',
  styleUrls: ['./puzzleapp.component.css']
})
export class PuzzleappComponent implements OnInit {

  switch1Number: number;
  switch2Number: number;
  switch3Number: number;
  switch4Number: number;

  ngOnInit() {
    this.switch1Number = Math.round(Math.random());
    this.switch2Number = Math.round(Math.random());
    this.switch3Number = Math.round(Math.random());
    this.switch4Number = Math.round(Math.random());
    console.log( this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
  }

}
