import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.scss']
})
export class EditEmpleadoComponent implements OnInit {
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

  update(): void {
    this.newJornada = this.thirdFormGroup.value.newJornada === "" ? this.oldJornada : this.thirdFormGroup.value.newJornada;
    this.newDepa = this.thirdFormGroup.value.newDepa === "" ? this.oldDepa : this.thirdFormGroup.value.newDepa;

    this.mensajeIntro = (this.thirdFormGroup.value.newJornada === "") && (this.thirdFormGroup.value.newDepa) === "" ? "" : "Los datos han sido modificados correctamente."
    this.mensajeHoraIn = this.thirdFormGroup.value.newJornada === "" ? "La jornada no ha sido modificada." : "La jornada ha sido modificada de " + this.oldJornada + " a " + this.newJornada + ".";
    this.mensajeHoraOut = this.thirdFormGroup.value.newDepa === "" ? "El departamento no ha sido modificado." : "El departamento ha sido modificado de " +  this.oldDepa + " a " + this.newDepa + ".";
  }

  goBack(): void {
    this._snackBar.open("Guardado.", "", {
      duration: 2000,
    });
    this.router.navigateByUrl('/adminAccess');
  }

}