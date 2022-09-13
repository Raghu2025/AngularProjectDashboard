import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
@ViewChild('colon') colon!:ElementRef<any> 
  constructor() { }

  ngOnInit(): void {
  }
widthReducer($event:boolean){
  if($event){
    this.colon.nativeElement.style.width='0px'
  }
  else{
    this.colon.nativeElement.style.width='200px'
  }
}
}
