import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getAllQuestionUrl='http://localhost:8081/api/question/getAllQuestions';
  loginUrl='http://localhost:8081/api/employee/login'
  getAllUsers(){
    return this.http.get('http://localhost:8081/api/getAllUsers')
  }

  getAllDesignation():Observable<any>{
    return this.http.get<any>('http://localhost:8081/api/designation/get')
  }

  postDesignation(data:any){
    return this.http.post('http://localhost:8081/api/designation/add',data)
  }

  getAllFeedBack():Observable<any>{
    return this.http.get<any>('http://localhost:8081/api/feedback/getAllFeedbacks')
  }

  getAllQuestions(data:String):Observable<any>{
    const url=`${this.getAllQuestionUrl}?param=${data}`;
    console.log(url);
    return this.http.get<any>(url)
  }

  postQuestion(data:any){
    return this.http.post('http://localhost:8081/api/question/addQuestions',data)
  }

  putQuestionStatus(data:any){
    return this.http.put('http://localhost:8081/api/question/alterQuestionStatus',data)
  }

  getAllEmployees():Observable<any>{
    return this.http.get<any>('http://localhost:8081/api/employee/getAll')
  }

  postEmployee(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:8081/api/employee/add',data)
  }

  putEmployee(data:any):Observable<any>{
    return this.http.put<any>('http://localhost:8081/api/employee/alter/status',data)
  }

  addUserPost(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:8081/api/postUser',data)
  }

  login(email:any,password:any):Observable<any>{
    const url=`${this.loginUrl}?email=${email}&password=${password}`;
    return this.http.get<any>(url);
  }
}
