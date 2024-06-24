import { Role } from './role.enum';

export interface User {
  id: number;
  nombre: string;
  correo: string;
  rol_id: Role;
  fecha_creacion: Date;
  fecha_actualizacion: Date;
  activo: boolean;
  [key: string]: any; // Add index signature
}
