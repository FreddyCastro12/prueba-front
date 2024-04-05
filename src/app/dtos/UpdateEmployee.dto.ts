/**
 * Clase Dto que procesa los datos para la actualizacion de un empleado
 */
 export class UpdateEmployeeDTO {
    /**
	 * Id del empleado a actualizar
	 */
	idEmployee: number;

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
	 * Id del cargo del empleado
	 */
	idPosition: number;
}