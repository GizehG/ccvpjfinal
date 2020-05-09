import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-marca',
  templateUrl: './add-marca.component.html',
  styleUrls: ['./add-marca.component.scss']
})
export class AddMarcaComponent implements OnInit {
  formsGrp: FormGroup;
  currentDate = new Date();

  hh = this.currentDate.getHours();
  mm = this.currentDate.getMinutes();
  ss = this.currentDate.getSeconds();
  date = this.currentDate.toDateString();

  constructor(private formBlr: FormBuilder, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.formsGrp = this.formBlr.group({
      codigo: ['', Validators.required],
      horaIn: ['', Validators.required],
      horaOut: ['', Validators.required],
      fecha: ['', Validators.required]
    });
  }

  checkIn(){
    let params = this.formsGrp.value;
    console.log(params.codigo + " entrada: " + this.hh + ":"+ this.mm + " el día: " + this.date);
    // this.router.navigateByUrl('/adminAccess');
  }

  checkOut(){
    let params = this.formsGrp.value;
    console.log(params.codigo + " salida: " + this.hh + ":"+ this.mm + " el día: " + this.date);
    this.router.navigateByUrl('/adminAccess');
    this._snackBar.open("Marca guardada.", "", {
      duration: 2000,
    });
  }

}
