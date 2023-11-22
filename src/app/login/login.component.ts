import { map } from 'rxjs/operators';
import { ServiceService } from './../service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private service:ServiceService){}
    data={
      email:'',
      password:''
    }
    ans:String[]=[];
    obj={
      role:''
    }
    role:String='';
    login(){
      this.service.login(this.data.email,this.data.password).subscribe(res=>{
        this.obj=res
        console.log((this.obj.role))
      },err=>{console.log('Unable to login')}
      )
         }
}
