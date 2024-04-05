import { PositionDTO } from "./Position.dto";

/**
 * Clase Dto que procesa los datos de un empleado
 */
 export class EmployeeDTO {
    /**
	 * Id del empleado
	 */
	id: number;

	/**
	 * Cedula del empleado
	 */
	identification: number;

	/**
	 * Nombre del empleado
	 */
	name: string;

	/**
	 * Foto de la cara de la persona
	 */
	image: string;

	/**
	 * Fecha de ingresa
	 */
	entryDate: string;

	/**
	 * Cargo del empleado
	 */
	position: PositionDTO;
}