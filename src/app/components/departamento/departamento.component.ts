import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})
export class DepartamentoComponent implements OnInit {
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
      depa: ['', Validators.required]

    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      age: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      code: ['', Validators.required]
    });
  }

  
  displayDataD(): void {
    console.log(this.randomID + " " + this.firstFormGroup.value.depa);
  }

  generateRandomID(): number{
    this.randomID = Math.floor(Math.random() * (1000 - 100)) + 100;
    return this.randomID;
  }

  goBack(): void {
    this._snackBar.open("Gurdado.", "", {
      duration: 2000,
    });
    this.router.navigateByUrl('/adminAccess');
  }


}
