import { Component } from '@angular/core';

@Component({
  selector: 'app-portflio',
  templateUrl: './portflio.component.html',
  styleUrls: ['./portflio.component.css']
})
export class PortflioComponent {
  imgesSrc:string[]= ['./assets/imgs/poert1.png' , './assets/imgs/port2.png' , './assets/imgs/port3.png'];
  img1:boolean = false;
  img2:boolean = false;
  img3:boolean = false;
  show1(){
    this.img1 = true;
  }
  show2(){
    this.img2 = true;
  }
  show3(){
    this.img3 = true;
  }
  close(){
    this.img1=false;
    this.img2=false;
    this.img3=false;
  };

}
