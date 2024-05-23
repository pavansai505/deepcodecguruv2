import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Observable } from 'rxjs';
import { Course, Lecture } from '../../models/course/course';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  headers:any
  constructor(private http:HttpClient,private token:TokenService) {
    
   }
   getCourses=():Observable<any>=>{
      return this.http.get<any>("http://localhost:8080/api/v1/course/get",{
        headers:{
          'Authorization':'Bearer '+this.token.getToken()
        }
      })
   }
   getCourseById=(id:number):Observable<any>=>{
      return this.http.get<any>("http://localhost:8080/api/v1/course/get/"+id,{
        headers:{
          'Authorization':'Bearer '+this.token.getToken()
        }
      })
   }
   getCoursesByUserId=(id:number):Observable<any>=>{
      return this.http.get<any>("http://localhost:8080/api/v1/course/getByUserId/"+id,{
        headers:{
          'Authorization':'Bearer '+this.token.getToken()
        }
      })
   }
   getCourseByLoggedInUserId=():Observable<any>=>{
      return this.http.get<any>("http://localhost:8080/api/v1/course/getByUserId",{
        headers:{
          'Authorization':'Bearer '+this.token.getToken()
        }
      })
   }
   addCourse=(course:Course):Observable<any>=>{
      return this.http.post<any>("http://localhost:8080/api/v1/course/add",course,{
        headers:{
          'Authorization':'Bearer '+this.token.getToken()
        }
      })
   }
   addLectures=(lecture:Lecture,id:number):Observable<any>=>{
      return this.http.post<any>("http://localhost:8080/api/v1/course/lecture/add/"+id,lecture,{
        headers:{
          'Authorization':'Bearer '+this.token.getToken()
        }
      })
   }
}
