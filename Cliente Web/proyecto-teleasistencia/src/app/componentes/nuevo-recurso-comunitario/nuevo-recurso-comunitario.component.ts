import {Component, OnInit} from '@angular/core';
import {IDireccion} from '../../interfaces/i-direccion';
import {IRecursoComunitario} from '../../interfaces/i-recurso-comunitario';
import {ITipoRecursoComunitario} from '../../interfaces/i-tipo-recurso-comunitario';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaDireccionService} from '../../servicios/carga-direccion.service';
import {CargaRecursoComunitarioService} from '../../servicios/carga-recurso-comunitario.service';
import {Direccion} from '../../clases/direccion';
import {RecursoComunitario} from '../../clases/recurso-comunitario';

@Component({
  selector: 'app-nuevo-recurso-comunitario',
  templateUrl: './nuevo-recurso-comunitario.component.html',
  styleUrls: ['./nuevo-recurso-comunitario.component.scss']
})
export class NuevoRecursoComunitarioComponent implements OnInit {
  public recurso_comunitario: IRecursoComunitario;
  public tipos_recursos_comunitarios: ITipoRecursoComunitario[];
  public dire: IDireccion;

  constructor(private titleServide: Title, private route: ActivatedRoute, private cargaDirecciones: CargaDireccionService, private cargaRecursosComunitarios: CargaRecursoComunitarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Nuevo recurso comunitario');
    this.recurso_comunitario = new RecursoComunitario();
    this.tipos_recursos_comunitarios = this.route.snapshot.data['tipos_recursos_comunitarios'];
    this.dire = new Direccion();
  }

  nuevaDireccion(): void {
    this.cargaDirecciones.nuevaDireccion(this.dire).subscribe(
      e => {
        console.log('Dirección creada');
      },
      error => {
        console.log(error);
      }
    );
  }

  nuevoRecursoComunitario(): void {
    this.recurso_comunitario.id_direccion = this.dire;
    this.cargaRecursosComunitarios.nuevoRecursoComunitario(this.recurso_comunitario).subscribe(
      e => {
        this.nuevaDireccion();
        console.log('Recurso comunitario creado');
        console.log(this.recurso_comunitario);
        this.router.navigate(['/recursos_comunitarios']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
