import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MarcasComponent } from './components/marcas/marcas.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { JornadaComponent } from './components/jornada/jornada.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { PermisosComponent } from './components/permisos/permisos.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import {MatStepperModule} from '@angular/material/stepper';
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
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ShowDepartamentosComponent } from './components/admin/show-departamentos/show-departamentos.component';
import { ShowJornadasComponent } from './components/admin/show-jornadas/show-jornadas.component';
import { ShowPermisosComponent } from './components/admin/show-permisos/show-permisos.component';
import { ShowEmpleadosComponent } from './components/admin/show-empleados/show-empleados.component';





@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SideMenuComponent,
    MarcasComponent,
    JornadaComponent,
    DepartamentoComponent,
    PermisosComponent,
    EmpleadoComponent,
    AdminAccessComponent,
    AddMarcaComponent,
    DeleteDepartamentoComponent,
    DeleteJorandaComponent,
    DeletePermisoComponent,
    DeleteEmpleadoComponent,
    DeleteMarcaComponent,
    EditDepartamentoComponent,
    EditJornadaComponent,
    EditPermisoComponent,
    EditEmpleadoComponent,
    EditMarcaComponent,
    ResportesComponent,
    ShowDepartamentosComponent,
    ShowJornadasComponent,
    ShowPermisosComponent,
    ShowEmpleadosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatStepperModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
