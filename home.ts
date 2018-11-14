import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JiajuComponent } from '../../components/jiaju/jiaju';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  color:string;
  num:Number=1;
  constructor(public navCtrl: NavController) {
   
  }
  change2(){
    this.num=2;
    var yellow2=document.getElementById('yellow2');
    var yellow1=document.getElementById('yellow1');
    yellow2.style.borderBottom='2px solid #ffdb2c';
    yellow1.style.borderBottom='2px solid #fff';
  }
  change1(){
    this.num=1;
    var yellow2=document.getElementById('yellow2');
    var yellow1=document.getElementById('yellow1');
    yellow1.style.borderBottom='2px solid #ffdb2c';
    yellow2.style.borderBottom='2px solid #fff';
  }
}
