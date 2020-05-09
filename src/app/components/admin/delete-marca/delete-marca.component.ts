import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-delete-marca',
  templateUrl: './delete-marca.component.html',
  styleUrls: ['./delete-marca.component.scss']
})
export class DeleteMarcaComponent implements OnInit {
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

  tipoDeMarca:string;

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
      marcaType:['']
    });
  }

  
  displayDataP2(): void {
    // console.log("'" +this.thirdFormGroup.value.newFecha+"'" + " " +"'"+ this.thirdFormGroup.value.newMotivo+"'");
    // console.log((this.thirdFormGroup.value.newMotivo === "") && (this.thirdFormGroup.value.newFecha) === "" );
  }

  deleteEntrada(): void {
    this.tipoDeMarca = "entrada";
    console.log(this.tipoDeMarca);
  }

  deleteSalida(): void {
    this.tipoDeMarca = "salida";
    console.log(this.tipoDeMarca);
  }

  goBack(): void {
    this._snackBar.open("Guardado.", "", {
      duration: 2000,
    });
    this.router.navigateByUrl('/adminAccess');
  }

}