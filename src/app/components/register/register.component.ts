import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/models/registerModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerModel: RegisterModel = {userName: '', email: '', password: '', role: ''}
  confirmPassword: string = ''
  roles: string[] = ['Student', 'Teacher']

  constructor() { }

  ngOnInit(): void {
  }

  onConfirm() {
    alert(this.registerModel.password);
  }

}
