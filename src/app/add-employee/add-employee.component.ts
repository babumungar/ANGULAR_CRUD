import { Component } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { AlphabetsOnlyValidatorDirective } from '../vaidators/alphabets-only-validator.directive';
import { alphabetsOnlyValidator } from '../vaidators/alphabets-only.validator';
import { passwordValidator } from '../vaidators/password-validator.validator';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employeeForm!: FormGroup;
  showPassword: boolean = false; // Property to control password visibility
  passType: string = 'password';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20),alphabetsOnlyValidator()] ],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\+91[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(5), passwordValidator()]]
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      // Handle form submission
      console.log("hi");

      console.log(this.employeeForm.value);
      alert('Employee details successfully uploaded!');
      location.reload();
    } else {
      // Mark form fields as touched to display validation errors
      this.employeeForm.markAllAsTouched();
    }
  }
  
  changePasswordType(){
    if(this.passType== 'password'){
    this.passType= 'text'
    }else{
    this.passType== 'password'
    }
    }
}
