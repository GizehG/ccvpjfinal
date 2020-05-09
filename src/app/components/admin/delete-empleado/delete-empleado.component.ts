import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-delete-empleado',
  templateUrl: './delete-empleado.component.html',
  styleUrls: ['./delete-empleado.component.scss']
})
export class DeleteEmpleadoComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  
  nombreEmpleado:string = "Juampa";
  codEmpleado:number = 1328;

  oldJornada:string = "Matutina";
  oldDepa:string = "DCC";

  newJornada:string;
  newDepa:string;
  
  mensajeIntro:string;
  mensajeHoraIn:string;
  mensajeHoraOut: string;

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
      secondCtrl: ['', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
      newJornada:[''],
      newDepa:['']
    });
  }

  
  displayDataP2(): void {
    // console.log("'" +this.thirdFormGroup.value.newFecha+"'" + " " +"'"+ this.thirdFormGroup.value.newMotivo+"'");
    // console.log((this.thirdFormGroup.value.newMotivo === "") && (this.thirdFormGroup.value.newFecha) === "" );
  }

  delete(): void {
    console.log('se ha eliminado correctamente el empleado');
  }

  goBack(): void {
    this._snackBar.open("Guardado.", "", {
      duration: 2000,
    });
    this.router.navigateByUrl('/adminAccess');
  }

}