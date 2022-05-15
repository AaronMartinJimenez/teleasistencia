import {ICopiaSeguridad} from "../interfaces/i-copia-seguridad";

export class CopiaSeguridad implements ICopiaSeguridad{
  id: number;
  ubicacion_copia: string;
  fecha_copia: string;
}
