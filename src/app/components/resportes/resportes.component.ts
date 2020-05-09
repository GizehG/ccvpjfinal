import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-resportes',
  templateUrl: './resportes.component.html',
  styleUrls: ['./resportes.component.scss']
})
export class ResportesComponent implements OnInit {
  
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  randomID: number;
  
  //fechas
  startDate:string = "28/01/2017";
  endDate:string = "18/10/2018";
  //empleado
  codEmpleado:number = null;
  nombreEmpleado:string = "";
  //depa
  codDepa:number = null;
  nombreDepa:string = "";
  //jornada
  nombreJornada:string = "";
  horaInJornada:string = "-";
  horaOutJornada:string = "-";  

  minutosTarde:number;
  minutosTemprano:number;
  horasTrabajadas: number;
  
  //estructura del reporte
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  cols:string[] = ['Fecha', 'Entrada', 'Salida', 'Entrada tarde (min)', 'Salida temprano (min)', 'Horas Trabajadas', 'Observaciones/Permisos'];
  data = new MatTableDataSource<Empleado>(EMP_DATA);
  
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
      fechaStart:['', Validators.required],
      fechaEnd:['', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
      code: ['', Validators.required]
    });
    this.dataSource.paginator = this.paginator;

    
  }
  
  displayDataP2(): void {
    console.log(this.firstFormGroup.value.codigo+ " " + this.firstFormGroup.value.fecha + " " + this.secondFormGroup.value.motivo);
  }

  generateRandomID(): number{
    this.randomID = Math.floor(Math.random() * (1000 - 100)) + 100;
    return this.randomID;
  }

  goBack(): void {
    this._snackBar.open("Guardado.", "", {
      duration: 2000,
    });
    this.router.navigateByUrl('/adminAccess');
  }

  generate(): void{
    this.nombreEmpleado = "Juampa";
    this.codEmpleado = this.firstFormGroup.value.codigo;

    this.startDate = this.secondFormGroup.value.fechaStart;
    this.endDate = this.secondFormGroup.value.fechaEnd;

    this.codDepa = 777;
    this.nombreDepa = "DCF";

    this.nombreJornada = "Matutina";
    this.horaInJornada = "07:00";
    let hhIn: number = parseInt(this.horaInJornada.substring(0,2),10);
    let mmIn: number = parseInt(this.horaInJornada.substring(3),10);

    this.horaOutJornada = "14:00";
    let hhOut: number = parseInt(this.horaOutJornada.substring(0,2),10);
    let mmOut: number = parseInt(this.horaOutJornada.substring(3),10);

    let hhInDB: number = 7;
    let mmInDB: number = 45;

    let hhOutDB: number = 13;
    let mmOutDB: number = 0;

    this.minutosTarde = (((hhIn * 60) + mmIn) - ((hhInDB * 60) + mmInDB)) > 0 ? 0 : (((hhIn * 60) + mmIn) - ((hhInDB * 60) + mmInDB))*-1;
    this.minutosTemprano = (((hhOut * 60) + mmOut) - ((hhOutDB * 60) + mmOutDB)) > 0 ? (((hhOut * 60) + mmOut) - ((hhOutDB * 60) + mmOutDB)) : 0;
    this.horasTrabajadas = Math.round((((hhOutDB * 60) + mmOutDB) - ((hhInDB * 60) + mmInDB))/60);
    
    // console.log( (((hhIn * 60) + mmIn) - ((hhInDB * 60) + mmInDB)) > 0);
    // console.log(mmOut);
    // console.log(hhOut);
    // console.log(mmIn);
    // console.log(hhIn);
    // console.log(hrsTrabajadas);
    // console.log(temprano);
    // console.log(tarde + " " + temprano);

    this._snackBar.open("Generando...", "", {
      duration: 2000,
    });
  }
}

export interface Empleado {
  fecha: string;
  entrada: string;
  salida: string;
  entradaTarde: string;
  salidaTemprano: string;
  horas:string;
  otros:string;
}

const EMP_DATA: Empleado[] = [
  {fecha: "23/07/1999", entrada: '4:35', salida: "-", entradaTarde: '0', salidaTemprano: "0", horas: "-", otros:"-"},
  {fecha: "23/07/1999", entrada: '4:35', salida: "-", entradaTarde: '0', salidaTemprano: "0", horas: "-", otros:"-"},
  {fecha: "23/07/1999", entrada: '4:35', salida: "-", entradaTarde: '0', salidaTemprano: "0", horas: "-", otros:"-"},
  {fecha: "23/07/1999", entrada: '4:35', salida: "-", entradaTarde: '0', salidaTemprano: "0", horas: "-", otros:"-"},
  {fecha: "23/07/1999", entrada: '4:35', salida: "-", entradaTarde: '0', salidaTemprano: "0", horas: "-", otros:"-"},
  {fecha: "23/07/1999", entrada: '4:35', salida: "-", entradaTarde: '0', salidaTemprano: "0", horas: "-", otros:"-"},
  {fecha: "23/07/1999", entrada: '4:35', salida: "-", entradaTarde: '0', salidaTemprano: "0", horas: "-", otros:"-"},
  {fecha: "23/07/1999", entrada: '4:35', salida: "-", entradaTarde: '0', salidaTemprano: "0", horas: "-", otros:"-"},
  {fecha: "23/07/1999", entrada: '4:35', salida: "-", entradaTarde: '0', salidaTemprano: "0", horas: "-", otros:"-"},
  {fecha: "23/07/1999", entrada: '4:35', salida: "-", entradaTarde: '0', salidaTemprano: "0", horas: "-", otros:"-"},
  {fecha: "23/07/1999", entrada: '4:35', salida: "-", entradaTarde: '0', salidaTemprano: "0", horas: "-", otros:"-"},
  {fecha: "23/07/1999", entrada: '4:35', salida: "-", entradaTarde: '0', salidaTemprano: "0", horas: "-", otros:"-"},
  {fecha: "23/07/1999", entrada: '4:35', salida: "-", entradaTarde: '0', salidaTemprano: "0", horas: "-", otros:"-"}  
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
