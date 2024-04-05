/**
 * Clase Dto que procesa los datos para la creacion de un empleado
 */
export class CreateEmployeeDTO {
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