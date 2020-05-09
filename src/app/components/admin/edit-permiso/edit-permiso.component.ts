import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-permiso',
  templateUrl: './edit-permiso.component.html',
  styleUrls: ['./edit-permiso.component.scss']
})
export class EditPermisoComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  
  fechaPermiso: string = "02/08/2019";
  motivoPermiso: string = "Tráfico";

  newFechaPermiso:string;
  newMotivoPermiso:string;

  mensajeIntro:string;
  mensajeFecha:string;
  mensajeMotivo: string;

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
      newFecha:[''],
      newMotivo:['']
    });
  }

  
  displayDataP2(): void {
    console.log("'" +this.thirdFormGroup.value.newFecha+"'" + " " +"'"+ this.thirdFormGroup.value.newMotivo+"'");
    console.log((this.thirdFormGroup.value.newMotivo === "") && (this.thirdFormGroup.value.newFecha) === "" );
  }

  update(): void {
    this.newFechaPermiso = this.thirdFormGroup.value.newFecha === "" ? this.fechaPermiso : this.thirdFormGroup.value.newFecha;
    this.newMotivoPermiso = this.thirdFormGroup.value.newMotivo === "" ? this.motivoPermiso : this.thirdFormGroup.value.newMotivo;

    this.mensajeIntro = (this.thirdFormGroup.value.newMotivo === "") && (this.thirdFormGroup.value.newFecha) === "" ? "" : "Los datos han sido modificados correctamente."
    this.mensajeFecha = this.thirdFormGroup.value.newFecha === "" ? "La fecha no ha sido modificada." : "La fecha del permiso ha sido modificada de" + this.fechaPermiso + " a " + this.newFechaPermiso + ".";
    this.mensajeMotivo = this.thirdFormGroup.value.newMotivo === "" ? "El motivo no ha sido modificado." : "El motivo del permiso ha sido modificada de" +  this.motivoPermiso + " a " + this.newMotivoPermiso+ ".";
  }

  goBack(): void {
    this._snackBar.open("Guardado.", "", {
      duration: 2000,
    });
    this.router.navigateByUrl('/adminAccess');
  }

}