import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl,FormArray,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title='myApp';
  loginform=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    pass:new FormControl(null,[Validators.required,Validators.minLength(6)])
  });
  loginUser(){
    console.log(this.loginform.status);
    console.log(this.loginform.value);
    console.log(this.loginform.valid);
  };
}
