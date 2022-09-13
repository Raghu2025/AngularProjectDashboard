import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() canvasS:EventEmitter<any> = new EventEmitter()
  canva:Boolean =false 
  constructor() { }

  ngOnInit(): void {
  }
  canvasBtn(){
    this.canva = !this.canva
this.canvasS.emit(this.canva)
}
}
