import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {
  formsGrp: FormGroup;
  currentDate = new Date();

  hh = this.currentDate.getHours();
  mm = this.currentDate.getMinutes();
  ss = this.currentDate.getSeconds();
  date = this.currentDate.toDateString();

  constructor(private formBlr: FormBuilder, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.formsGrp = this.formBlr.group({
      codigo: ['', Validators.required]
    });
  }

  checkIn(){
    let params = this.formsGrp.value;
    console.log(params.codigo + " entrada: " + this.hh + ":"+ this.mm + " el día: " + this.date);
    this._snackBar.open("Marca guardada.", "", {
      duration: 2000,
    });
    // this.router.navigateByUrl('/adminAccess');
  }

  checkOut(){
    let params = this.formsGrp.value;
    console.log(params.codigo + " salida: " + this.hh + ":"+ this.mm + " el día: " + this.date);
    this._snackBar.open("Marca guardada.", "", {
      duration: 2000,
    });
    // this.router.navigateByUrl('/adminAccess');
  }

  

}
