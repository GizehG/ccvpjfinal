import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit-jornada',
  templateUrl: './edit-jornada.component.html',
  styleUrls: ['./edit-jornada.component.scss']
})
export class EditJornadaComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  
  jornadaName: string = "Matutina";

  oldInHH:string ="07:00"; 
  newInHH:string;

  oldOutHH:string = "14:00";
  newOutHH:string;

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
      code: ['', Validators.required],
      newIn:['', Validators.required],
      newOut:['', Validators.required]
    });
  }

  
  displayDataP2(): void {
    console.log("soy muy flojo para editar esto");    
  }

  update(): void {
    this.newInHH = this.thirdFormGroup.value.newIn;
    this.newOutHH = this.thirdFormGroup.value.newOut;
  }

  goBack(): void {
    this._snackBar.open("Guardado.", "", {
      duration: 2000,
    });
    this.router.navigateByUrl('/adminAccess');
  }

}