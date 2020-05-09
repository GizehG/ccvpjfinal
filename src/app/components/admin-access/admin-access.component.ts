import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-access',
  templateUrl: './admin-access.component.html',
  styleUrls: ['./admin-access.component.scss']
})
export class AdminAccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToAddDepa(): void{
    this.router.navigateByUrl("adminAccess/addDepas");
  }

  goToAddJornada(): void{
    this.router.navigateByUrl("adminAccess/addJornadas");
  }

  goToAddPermiso(): void{
    this.router.navigateByUrl("adminAccess/addPermisos");
  }

  goToAddEmpleado(): void{
    this.router.navigateByUrl("adminAccess/addEmpleados");
  }

  goToAddMarcas(): void{
    this.router.navigateByUrl("adminAccess/addMarcas");
  }





  goToEditDepa(): void{
    this.router.navigateByUrl("adminAccess/editDepas");
  }

  goToEditJornada(): void{
    this.router.navigateByUrl("adminAccess/editJornadas");
  }

  goToEditPermiso(): void{
    this.router.navigateByUrl("adminAccess/editPermisos");
  }

  goToEditEmpleado(): void{
    this.router.navigateByUrl("adminAccess/editEmpleados");
  }

  goToEditMarcas(): void{
    this.router.navigateByUrl("adminAccess/editMarcas");
  }




  

  goToDeleteDepa(): void{
    this.router.navigateByUrl("adminAccess/deleteDepas");
  }

  goToDeleteJornada(): void{
    this.router.navigateByUrl("adminAccess/deleteJornadas");
  }

  goToDeletePermiso(): void{
    this.router.navigateByUrl("adminAccess/deletePermisos");
  }

  goToDeleteEmpleado(): void{
    this.router.navigateByUrl("adminAccess/deleteEmpleados");
  }

  goToDeleteMarcas(): void{
    this.router.navigateByUrl("adminAccess/deleteMarcas");
  }


}
