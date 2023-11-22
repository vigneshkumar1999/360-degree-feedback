import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  fname:String[]=[];
  questions:String[]=[];

  param:String='';


  add={
    question:'',
    name:''
  }

  alter={
    question:'',
    name:'',
    status:false
  }
  constructor(private service:ServiceService){}

  ngOnInit(): void {
    this.service.getAllFeedBack().subscribe((res)=>{
      this.fname=res.map((data: { feedback: any })=>data.feedback)
    })
  }

  getQuestions(event:any){
  this.param=event.target.value;
  console.log(this.param)
  this.service.getAllQuestions(this.param).subscribe((res)=>{
    this.questions=res.map((data:{questions:any})=>data.questions)
  });
  console.log(this.questions)
}

addQuestion(){
console.log(this.add.question);
console.log(this.add.name)
this.service.postQuestion(this.add).subscribe(res=>console.log(res));
  }

  alterQuestion(){
    this.service.putQuestionStatus(this.alter).subscribe(res=>console.log(res))
  }
}
