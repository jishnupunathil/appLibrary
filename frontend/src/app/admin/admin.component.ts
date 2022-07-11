import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  hide=false
  signHide=false
  submitted=false
  signSubmit=false

  loginForm=this.fb.group({
    Username:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(6)]]
  })

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

  onSubmit(data:any){
    this.submitted=true
    console.log({data});
    
  }


  onSign(data:any){
    this.signSubmit=true
    console.log(data);
    

  }

 get allControls(){
    return this.loginForm.controls
  }

  get signControls(){

    return this.signUpForm.controls

  }

}
