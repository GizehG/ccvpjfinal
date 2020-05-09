import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit-departamento',
  templateUrl: './edit-departamento.component.html',
  styleUrls: ['./edit-departamento.component.scss']
})
export class EditDepartamentoComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  
  oldDepaName:string = "DCC"
  newDepaName:string;
  codigoDepa:number;

  constructor(private _formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      name: ['', Validators.required],
      jornada: ['', Validators.required],
      depa: ['', Validators.required],
      codigo:['', Validators.required],
      fecha:['', Validators.required]
      

    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      age: ['', Validators.required],
      hora_In: ['', Validators.required],
      hora_Out: ['', Validators.required],
      motivo:['', Validators.required],
      newDepaName: ['', Validators.required]

    });

    this.thirdFormGroup = this._formBuilder.group({
      code: ['', Validators.required]
    });
  }

  
  displayDataP2(): void {
    console.log(this.oldDepaName+ " a " + this.newDepaName);    
  }

  update(): void {
    this.codigoDepa = this.firstFormGroup.value.codigo;
    this.newDepaName = this.secondFormGroup.value.newDepaName;
  }

  goBack(): void {
    this._snackBar.open("Guardado.", "", {
      duration: 2000,
    });
    this.router.navigateByUrl('/adminAccess');
  }

}
