import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{HttpClientModule} from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddDesignationComponent } from './add-designation/add-designation.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GiveFeedbackComponent } from './give-feedback/give-feedback.component';
import { ReceiveFeedbackComponent } from './receive-feedback/receive-feedback.component';
import { RequestFeedbackComponent } from './request-feedback/request-feedback.component'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AddQuestionComponent,
    AddDesignationComponent,
    RegisterComponent,
    LoginComponent,
    GiveFeedbackComponent,
    ReceiveFeedbackComponent,
    RequestFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
