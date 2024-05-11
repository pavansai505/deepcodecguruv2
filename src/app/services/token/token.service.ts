import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  getToken=()=>{
    return sessionStorage.getItem("jwt") || ""
  }
  setToken(key:string,value:any){

    sessionStorage.setItem(key,value)

  }
}
