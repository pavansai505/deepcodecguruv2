import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AccessControlService {
  result:any
  constructor() { 
    const token=sessionStorage.getItem("jwt") || ""
    if (token!="") {
      this.result=jwtDecode(token)
    }else{
      this.result=false
    }
    
    
  }
  isUserLoggedIn(){
    if(this.result){
      return this.result.authorities.length>0
    }else{
      return false
    }
    
  }
}
