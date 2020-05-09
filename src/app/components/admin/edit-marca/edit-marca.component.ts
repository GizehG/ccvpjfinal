import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-marca',
  templateUrl: './edit-marca.component.html',
  styleUrls: ['./edit-marca.component.scss']
})
export class EditMarcaComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  
  nombreEmpleado:string = "Juampa";
  codEmpleado:number = 1328;

  diaMarca:string = "28/01/2017";

  oldHoraIn:string = "07:13";
  oldHoraOut:string = "14:50";

  newHoraIn:string;
  newHoraOut:string;

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
      newIn:[''],
      newOut:['']
    });
  }

  
  displayDataP2(): void {
    // console.log("'" +this.thirdFormGroup.value.newFecha+"'" + " " +"'"+ this.thirdFormGroup.value.newMotivo+"'");
    // console.log((this.thirdFormGroup.value.newMotivo === "") && (this.thirdFormGroup.value.newFecha) === "" );
  }

  update(): void {
    this.newHoraIn = this.thirdFormGroup.value.newIn === "" ? this.oldHoraIn : this.thirdFormGroup.value.newIn;
    this.newHoraOut = this.thirdFormGroup.value.newOut === "" ? this.oldHoraOut : this.thirdFormGroup.value.newOut;

    this.mensajeIntro = (this.thirdFormGroup.value.newIn === "") && (this.thirdFormGroup.value.newOut) === "" ? "" : "Los datos han sido modificados correctamente."
    this.mensajeHoraIn = this.thirdFormGroup.value.newIn === "" ? "La hora de entrada no ha sido modificada." : "La hora de entrada ha sido modificada de " + this.oldHoraIn + " a " + this.newHoraIn + ".";
    this.mensajeHoraOut = this.thirdFormGroup.value.newOut === "" ? "La hora de entrada no ha sido modificada." : "La hora de salida ha sido modificada de " +  this.oldHoraOut + " a " + this.newHoraOut+ ".";
  }

  goBack(): void {
    this._snackBar.open("Guardado.", "", {
      duration: 2000,
    });
    this.router.navigateByUrl('/adminAccess');
  }

}