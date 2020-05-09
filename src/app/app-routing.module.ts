import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcasComponent } from './components/marcas/marcas.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { JornadaComponent } from './components/jornada/jornada.component';
import { PermisosComponent } from './components/permisos/permisos.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { AdminAccessComponent } from './components/admin-access/admin-access.component';
import { AddMarcaComponent } from './components/admin/add-marca/add-marca.component';
import { DeleteDepartamentoComponent } from './components/admin/delete-departamento/delete-departamento.component';
import { DeleteJorandaComponent } from './components/admin/delete-joranda/delete-joranda.component';
import { DeletePermisoComponent } from './components/admin/delete-permiso/delete-permiso.component';
import { DeleteEmpleadoComponent } from './components/admin/delete-empleado/delete-empleado.component';
import { DeleteMarcaComponent } from './components/admin/delete-marca/delete-marca.component';
import { EditDepartamentoComponent } from './components/admin/edit-departamento/edit-departamento.component';
import { EditJornadaComponent } from './components/admin/edit-jornada/edit-jornada.component';
import { EditPermisoComponent } from './components/admin/edit-permiso/edit-permiso.component';
import { EditEmpleadoComponent } from './components/admin/edit-empleado/edit-empleado.component';
import { EditMarcaComponent } from './components/admin/edit-marca/edit-marca.component';
import { ResportesComponent } from './components/resportes/resportes.component';



const routes: Routes = [
  {path: 'addMarcas', component: MarcasComponent},
  {path: 'test', component:SideBarComponent},
  {path: 'reportes', component:ResportesComponent},

  {path: 'adminAccess', component: AdminAccessComponent},
  {path: 'adminAccess/addDepas', component: DepartamentoComponent},
  {path: 'adminAccess/addJornadas', component: JornadaComponent},
  {path: 'adminAccess/addPermisos', component: PermisosComponent},
  {path: 'adminAccess/addEmpleados', component: EmpleadoComponent},
  {path: 'adminAccess/addMarcas', component: AddMarcaComponent},

  {path: 'adminAccess/deleteDepas', component: DeleteDepartamentoComponent},
  {path: 'adminAccess/deleteJornadas', component: DeleteJorandaComponent},
  {path: 'adminAccess/deletePermisos', component: DeletePermisoComponent},
  {path: 'adminAccess/deleteEmpleados', component: DeleteEmpleadoComponent},
  {path: 'adminAccess/deleteMarcas', component: DeleteMarcaComponent},

  {path: 'adminAccess/editDepas', component: EditDepartamentoComponent},
  {path: 'adminAccess/editJornadas', component: EditJornadaComponent},
  {path: 'adminAccess/editPermisos', component: EditPermisoComponent},
  {path: 'adminAccess/editEmpleados', component: EditEmpleadoComponent},
  {path: 'adminAccess/editMarcas', component: EditMarcaComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
