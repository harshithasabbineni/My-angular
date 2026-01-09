import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title='myApp';
  LoginForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.LoginForm=this.fb.group({
      email:["",[Validators.required,Validators.minLength(4)]],
      pass:["",[Validators.required,Validators.minLength(6)]],
    });
  }
setVal(){this.LoginForm.setValue({email:"aa@bb",pass:"1234"})}
patchVal(){this.LoginForm.patchValue({email:"aa@bb"})}
}
