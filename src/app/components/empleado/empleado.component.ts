import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  randomID: number;
  sexo: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor(private _formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      name: ['', Validators.required],
      jornada: ['', Validators.required],
      depa: ['', Validators.required],
      codJornada: ['', Validators.required],
      codDepa: ['', Validators.required]

    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      age: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      code: ['', Validators.required]
    });
  }

  displayDataE(): void {
    console.log(this.firstFormGroup.value.name + " " + this.secondFormGroup.value.age + " " + this.randomID);
  }
  displayDataJ(): void {
    console.log(this.firstFormGroup.value.name + " " + this.secondFormGroup.value.age + " " + this.randomID + " " + this.firstFormGroup.value.jornada);
  }
  displayDataD(): void {
    console.log(this.firstFormGroup.value.name + " " + this.secondFormGroup.value.age + " " + this.randomID + " " + this.firstFormGroup.value.jornada + " " + this.firstFormGroup.value.depa);
  }

  generateRandomID(): number{
    this.randomID = Math.floor(Math.random() * (1000 - 1)) + 1;
    return this.randomID;
  }

  goBack(): void {
    this.router.navigateByUrl('/adminAccess');
    this._snackBar.open("Guardado.", "", {
      duration: 2000,
    });
  }

}
