import { Component, OnInit } from '@angular/core';
import { EmployeeDTO } from 'src/app/dtos/Employee.dto';
import { EmployeeService } from '../employee.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PositionDTO } from 'src/app/dtos/Position.dto';
import { CreateEmployeeDTO } from 'src/app/dtos/CreateEmployee.dto';
import { UpdateEmployeeDTO } from 'src/app/dtos/UpdateEmployee.dto';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService, ConfirmationService]
})
export class EmployeesComponent implements OnInit {

  public listEmployees: EmployeeDTO[];
  public employeeSelected: EmployeeDTO;
  public listPositions: PositionDTO[];
  public displayModal: boolean;
  public position: PositionDTO = new PositionDTO;
  public identificationEmployee: number;
  public nameEmployee: string;
  public employee: CreateEmployeeDTO;
  public uploadedFiles: any[] = [];
  public isEmployees: boolean = false;
  private image: string;
  private methodEmployee: string;

  constructor(
    private service: EmployeeService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.getEmployees();
    this.getPositions();
  }

  onDisplayModal() {
    this.methodEmployee = "create";
    this.nameEmployee = "";
    this.identificationEmployee = 0;
    this.position = new PositionDTO;
    this.displayModal = true;
  }

  deleteEmployee(idEmployee: number) {
    this.service.deleteEmployee(idEmployee).subscribe(res => {
      this.getEmployees();
      this.messageService.add({
        key: 'toastemployee',
        severity: 'success',
        summary: 'Exito',
        detail: "Empleado eliminado correctamente"
      });
    }, (error => {
      this.messageService.add({
        key: 'toastemployee',
        severity: 'error',
        summary: 'Error',
        detail: "Error al intentar crear el empleado"
      });
    }));
  }

  openUpdateEmployee(idEmployee: number) {
    this.image = "";
    this.uploadedFiles = [];
    this.methodEmployee = "update";
    this.getEmployee(idEmployee);
    setTimeout(() => {
      this.nameEmployee = this.employeeSelected.name;
      this.identificationEmployee = this.employeeSelected.identification;
      this.position = this.employeeSelected.position;
      this.displayModal = true;
    }, 1000);
  }

  myUploader(event: any) {
    if (event.files.length === 0) {
      return;
    }
    const file = event.files[0];

    this.service.uploadImage(file).subscribe(
      (response) => {
        this.image = response.image;
        this.messageService.add({ key: 'toastemployee', severity: 'info', summary: 'Archivo cargado', detail: '' });
      },
      (error) => {
        this.messageService.add({
          key: 'toastemployee',
          severity: 'error',
          summary: 'Error',
          detail: "Error al cargar la imagen del empleado"
        });
      }
    );
  }

  adminEmployee() {
    if (this.methodEmployee === "create") {
      this.createEmployee();
    } else {
      this.updateEmployee();
    }
  }

  private getEmployees() {
    this.service.getEmployees().subscribe(res => {
      this.listEmployees = res;

      if (this.listEmployees && this.listEmployees.length > 0) {
        this.isEmployees = true;
      } else{
        this.isEmployees = false;
      }
    }, (error => {
      this.messageService.add({
        key: 'toastemployee',
        severity: 'error',
        summary: 'Error',
        detail: "Error al consultar los empleados"
      });
    }))
  }

  private getPositions() {
    this.service.getPositions().subscribe(res => {
      this.listPositions = res;
    }, (error => {
      this.messageService.add({
        key: 'toastemployee',
        severity: 'error',
        summary: 'Error',
        detail: "Error al consultar los cargos"
      });
    }))
  }

  private getEmployee(idEmployee: number) {
    this.service.getEmployee(idEmployee).subscribe(res => {
      this.employeeSelected = new EmployeeDTO;
      this.employeeSelected = res;
    }, (error => {
      this.messageService.add({
        key: 'toastemployee',
        severity: 'error',
        summary: 'Error',
        detail: "Error al consultar el empleado"
      });
    }))
  }

  private createEmployee() {
    this.employee = new CreateEmployeeDTO;
    this.employee.identification = this.identificationEmployee;
    this.employee.name = this.nameEmployee;
    this.employee.image = this.image;
    this.employee.idPosition = this.position.idPosition;

    this.service.createEmployee(this.employee).subscribe(res => {
      this.nameEmployee = "";
      this.identificationEmployee = 0;
      this.position = new PositionDTO;
      this.uploadedFiles = [];
      this.getEmployees();
      this.messageService.add({
        key: 'toastemployee',
        severity: 'success',
        summary: 'Exito',
        detail: "Empleado creado correctamente"
      });
    }, (error => {
      this.messageService.add({
        key: 'toastemployee',
        severity: 'error',
        summary: 'Error',
        detail: "Error al intentar crear el empleado"
      });
    }));
  }

  private updateEmployee () {
    let updateEmployee = new UpdateEmployeeDTO;
    updateEmployee.idEmployee = this.employeeSelected.id;
    updateEmployee.idPosition = this.position.idPosition;
    updateEmployee.identification = this.identificationEmployee;
    updateEmployee.name = this.nameEmployee;

    this.service.updateEmployee(updateEmployee).subscribe(res => {
      this.nameEmployee = "";
      this.identificationEmployee = 0;
      this.position = new PositionDTO;
      this.uploadedFiles = [];
      this.getEmployees();
      this.messageService.add({
        key: 'toastemployee',
        severity: 'success',
        summary: 'Exito',
        detail: "Empleado actualizado correctamente"
      });
    }, (error => {
      this.messageService.add({
        key: 'toastemployee',
        severity: 'error',
        summary: 'Error',
        detail: "Error al intentar actualizar el empleado"
      });
    }));
  }
}
