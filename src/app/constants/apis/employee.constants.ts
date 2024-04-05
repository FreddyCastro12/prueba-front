import { AppDomainConstant } from "./app-domain.constant";

/**
 * Clase constante que contiene todos los dominios que utiliza el componente de empleados
 */
 export class EmployeeConstant {

    /** Nombre del REST para empleados */
    static readonly EMPLOYEES: string = 'employees/';

    /** Nombre del REST para los cargos */
    static readonly POSITIONS: string = 'positions/';
    
    /** URL del recurso para crear un empleado */
    static readonly CREATE_EMPLOYEE: string = AppDomainConstant.URI_BACK + EmployeeConstant.EMPLOYEES + "createEmployee"

    /** URL del recurso para obtener un empleado */
    static readonly GET_EMPLOYEE: string = AppDomainConstant.URI_BACK + EmployeeConstant.EMPLOYEES + "getEmployee"

    /** URL del recurso para obtener todos los empleados */
    static readonly GET_EMPLOYEES: string = AppDomainConstant.URI_BACK + EmployeeConstant.EMPLOYEES + "getEmployees"

    /** URL del recurso para eliminar un empleado */
    static readonly DELETE_EMPLOYEE: string = AppDomainConstant.URI_BACK + EmployeeConstant.EMPLOYEES + "deleteEmployee"

    /** URL del recurso para actualizar un empleado */
    static readonly UPDATE_EMPLOYEE: string = AppDomainConstant.URI_BACK + EmployeeConstant.EMPLOYEES + "updateEmployee"

    /** URL del recurso para obtener todos los cargos de los empleados */
    static readonly GET_POSITIONS: string = AppDomainConstant.URI_BACK + EmployeeConstant.POSITIONS + "getPositions"

    /** URL del recurso para actualizar un empleado */
    static readonly UPLOAD_IMAGE: string = AppDomainConstant.URI_BACK + EmployeeConstant.EMPLOYEES + "uploadImage"
}