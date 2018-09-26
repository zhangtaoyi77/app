import { Injectable } from '@angular/core';
import { Session } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class ServicenameService {

  constructor() { }
  set(key,value){
    localStorage.setItem(key,value);
  }
  get(key){
    return localStorage.getItem(key);
  }
  

}
