import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AutoCompleteModule } from "primeng/autocomplete";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { EmployeeService } from './modules/employee.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { EmployeesComponent } from './modules/employees/employees.component';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    FormsModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    ConfirmDialogModule,
    AppRoutingModule,
    ConfirmPopupModule,
    TableModule,
    MultiSelectModule,
    DialogModule,
    FileUploadModule
  ],
  providers: [
    ConfirmationService,
    EmployeeService,
    MessageService
  ],
  declarations: [
    AppComponent,
    EmployeesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
