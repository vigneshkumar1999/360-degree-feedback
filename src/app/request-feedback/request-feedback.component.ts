import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-request-feedback',
  templateUrl: './request-feedback.component.html',
  styleUrls: ['./request-feedback.component.css']
})
export class RequestFeedbackComponent implements OnInit {
  feedback:String[]=[];
  name:String[]=[]
  detail={
    name:''
  }
constructor(private service:ServiceService){}
  ngOnInit(): void {
    this.service.getAllFeedBack().subscribe(res=>this.feedback=res.map((data: { feedback: any; })=>data.feedback))
    this.service.getAllEmployees().subscribe(res=>this.name=res.map((data: { name: any; })=>data.name))
  }
  clickfunc(event:any){
    this.detail.name=event.target.value
    console.log(this.detail)
    console.log(event.target.value)
  }
}
