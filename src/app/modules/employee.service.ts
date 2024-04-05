import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeConstant } from '../constants/apis/employee.constants';
import { CreateEmployeeDTO } from '../dtos/CreateEmployee.dto';
import { EmployeeDTO } from '../dtos/Employee.dto';
import { UpdateEmployeeDTO } from '../dtos/UpdateEmployee.dto';
import { PositionDTO } from '../dtos/Position.dto';
import { ResponseUploadImageDTO } from '../dtos/ResponseUploadImage.dto';

/**
 * Clase que contiene todos las peticiones al back de las taquillas pse
 */
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  /**
   * Constructor para la clase que contiene los servicios de taquillas
   * @param http Servicio que procesa las peticiones via http
   */
  constructor(private http: HttpClient) { }

  /**
   * Metodo que consume el servicio para la creación de un empleado
   */
  public createEmployee(request: CreateEmployeeDTO): Observable<string> {
    return this.http.post<string>(EmployeeConstant.CREATE_EMPLOYEE, request);
  }

  /**
   * Metodo que obtiene un empleado
   */
  public getEmployee(idEmployee: number): Observable<EmployeeDTO>{
    return this.http.get<EmployeeDTO>(EmployeeConstant.GET_EMPLOYEE + "/" + idEmployee);
  }

  /**
   * Metodo que obtiene la lista de todos los empleadoss
   */
  public getEmployees(): Observable<EmployeeDTO[]> {
    return this.http.get<EmployeeDTO[]>(EmployeeConstant.GET_EMPLOYEES);
  }

  /**
   * Metodo para eliminar un empleado
   */
  public deleteEmployee(idEmployee: number) {
    return this.http.delete(EmployeeConstant.DELETE_EMPLOYEE + "/" + idEmployee);
  }

  /**
   * Metodo para actualizar un empleado
   */
  public updateEmployee(request: UpdateEmployeeDTO) {
    return this.http.put(EmployeeConstant.UPDATE_EMPLOYEE, request);
  }

  /**
   * Metodo que obtiene la lista de todos los cargos de los empleadoss
   */
  public getPositions(): Observable<PositionDTO[]> {
    return this.http.get<PositionDTO[]>(EmployeeConstant.GET_POSITIONS);
  }

  /**
   * Metodo para cargar la imagen del empleado
   */
  public uploadImage(file: File): Observable<ResponseUploadImageDTO>  {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<ResponseUploadImageDTO>(EmployeeConstant.UPLOAD_IMAGE, formData);
  }
}
