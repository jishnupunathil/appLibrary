import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }
  hide=false
  signHide=false
  submitted=false
  signSubmit=false

  user={username:'',
  password:''}

  signUpForm=this.fb.group({

    firstName:['',Validators.required],
    lastName:['',Validators.required],
    age:['',Validators.required],
    gender:['',Validators.required],
    date:['',Validators.required],
    role:[,Validators.required],
    passWord:['',[Validators.required,Validators.minLength(6)]],
    ConfirmPass:['',[Validators.required,Validators.minLength(6)]]
},
{
  validators:()=>{
    if(this.signUpForm?.controls?.passWord.value!=this.signUpForm?.controls?.ConfirmPass.value){
      console.log('hello');
      this.signUpForm.controls.ConfirmPass.setErrors({passMisMatch:true})
    }
    console.log('hello');
    
  }
}
)



  ngOnInit(): void {
  }

  loginUser(){

    
    this.auth.loginUser(this.user).subscribe(
      res=>{

        localStorage.setItem('token',res.token)

        this.router.navigate(['/books'])
      })

  }
  
  onSign(data:any){
    this.signSubmit=true
    console.log(data);
    

  }

//  get allControls(){
//     return this.loginForm.controls
//   }

  get signControls(){

    return this.signUpForm.controls

  }

}
