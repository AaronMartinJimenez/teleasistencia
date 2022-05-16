import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListaUsersComponent} from './componentes/user/lista-users/lista-users.component';
import {ItemUserComponent} from './componentes/user/item-user/item-user.component';
import {ModificarUserComponent} from './componentes/user/modificar-user/modificar-user.component';
import {CrearUserComponent} from './componentes/user/crear-user/crear-user.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './componentes/home/home.component';
import {CargaUserService} from './servicios/carga-user.service';
import {ItemClasificacionAlarmaComponent} from './componentes/clasificacion-alarma/item-clasificacion-alarma/item-clasificacion-alarma.component';
import {ModificarClasificacionAlarmaComponent} from './componentes/clasificacion-alarma/modificar-clasificacion-alarma/modificar-clasificacion-alarma.component';
import {CrearClasificacionAlarmaComponent} from './componentes/clasificacion-alarma/crear-clasificacion-alarma/crear-clasificacion-alarma.component';
import {ListaClasificacionesAlarmasComponent} from './componentes/clasificacion-alarma/lista-clasificaciones-alarmas/lista-clasificaciones-alarmas.component';
import {ListaTiposCentrosSanitariosComponent} from './componentes/tipo-centro-sanitario/lista-tipos-centros-sanitarios/lista-tipos-centros-sanitarios.component';
import {ItemTipoCentroSanitarioComponent} from './componentes/tipo-centro-sanitario/item-tipo-centro-sanitario/item-tipo-centro-sanitario.component';
import {ModificarTipoCentroSanitarioComponent} from './componentes/tipo-centro-sanitario/modificar-tipo-centro-sanitario/modificar-tipo-centro-sanitario.component';
import {CrearTipoCentroSanitarioComponent} from './componentes/tipo-centro-sanitario/crear-tipo-centro-sanitario/crear-tipo-centro-sanitario.component';
import {CargaClasificacionAlarmaService} from './servicios/carga-clasificacion-alarma.service';
import {CargaTipoCentroSanitarioService} from './servicios/carga-tipo-centro-sanitario.service';
import {ListaTiposRecursosComunitariosComponent} from './componentes/tipo-recurso-comunitario/lista-tipos-recursos-comunitarios/lista-tipos-recursos-comunitarios.component';
import {ItemTipoRecursoComunitarioComponent} from './componentes/tipo-recurso-comunitario/item-tipo-recurso-comunitario/item-tipo-recurso-comunitario.component';
import {ModificarTipoRecursoComunitarioComponent} from './componentes/tipo-recurso-comunitario/modificar-tipo-recurso-comunitario/modificar-tipo-recurso-comunitario.component';
import {CrearTipoRecursoComunitarioComponent} from './componentes/tipo-recurso-comunitario/crear-tipo-recurso-comunitario/crear-tipo-recurso-comunitario.component';
import {CargaTipoRecursoComunitarioService} from './servicios/carga-tipo-recurso-comunitario.service';
import {ListaTiposModalidadesPacientesComponent} from './componentes/tipo-modalidad-paciente/lista-tipos-modalidades-pacientes/lista-tipos-modalidades-pacientes.component';
import {ItemTipoModalidadPacienteComponent} from './componentes/tipo-modalidad-paciente/item-tipo-modalidad-paciente/item-tipo-modalidad-paciente.component';
import {ModificarTipoModalidadPacienteComponent} from './componentes/tipo-modalidad-paciente/modificar-tipo-modalidad-paciente/modificar-tipo-modalidad-paciente.component';
import {CrearTipoModalidadPacienteComponent} from './componentes/tipo-modalidad-paciente/crear-tipo-modalidad-paciente/crear-tipo-modalidad-paciente.component';
import {CargaTipoModalidadPacienteService} from './servicios/carga-tipo-modalidad-paciente.service';
import {ListaTiposAlarmasComponent} from './componentes/tipo-alarma/lista-tipos-alarmas/lista-tipos-alarmas.component';
import {ItemTipoAlarmaComponent} from './componentes/tipo-alarma/item-tipo-alarma/item-tipo-alarma.component';
import {ModificarTipoAlarmaComponent} from './componentes/tipo-alarma/modificar-tipo-alarma/modificar-tipo-alarma.component';
import {CrearTipoAlarmaComponent} from './componentes/tipo-alarma/crear-tipo-alarma/crear-tipo-alarma.component';
import {CargaTipoAlarmaService} from './servicios/carga-tipo-alarma.service';
import {ListaCentrosSanitariosComponent} from './componentes/centro-sanitario/lista-centros-sanitarios/lista-centros-sanitarios.component';
import {ItemCentroSanitarioComponent} from './componentes/centro-sanitario/item-centro-sanitario/item-centro-sanitario.component';
import {ModificarCentroSanitarioComponent} from './componentes/centro-sanitario/modificar-centro-sanitario/modificar-centro-sanitario.component';
import {CrearCentroSanitarioComponent} from './componentes/centro-sanitario/crear-centro-sanitario/crear-centro-sanitario.component';
import {ListaRecursosComunitariosComponent} from './componentes/recurso-comunitario/lista-recursos-comunitarios/lista-recursos-comunitarios.component';
import {ItemResursoComunitarioComponent} from './componentes/recurso-comunitario/item-resurso-comunitario/item-resurso-comunitario.component';
import {ModificarRecursoComunitarioComponent} from './componentes/recurso-comunitario/modificar-recurso-comunitario/modificar-recurso-comunitario.component';
import {CrearRecursoComunitarioComponent} from './componentes/recurso-comunitario/crear-recurso-comunitario/crear-recurso-comunitario.component';
import {ListaPersonasComponent} from './componentes/persona/lista-personas/lista-personas.component';
import {ItemPersonaComponent} from './componentes/persona/item-persona/item-persona.component';
import {ModificarPersonaComponent} from './componentes/persona/modificar-persona/modificar-persona.component';
import {CrearPersonaComponent} from './componentes/persona/crear-persona/crear-persona.component';
import {ListaDireccionesComponent} from './componentes/direccion/lista-direcciones/lista-direcciones.component';
import {ItemDireccionComponent} from './componentes/direccion/item-direccion/item-direccion.component';
import {ModificarDireccionComponent} from './componentes/direccion/modificar-direccion/modificar-direccion.component';
import {CrearDireccionComponent} from './componentes/direccion/crear-direccion/crear-direccion.component';
import {CargaDireccionService} from './servicios/carga-direccion.service';
import {CargaCentroSanitarioService} from './servicios/carga-centro-sanitario.service';
import {CargaPersonaService} from './servicios/carga-persona.service';
import {CargaRecursoComunitarioService} from './servicios/carga-recurso-comunitario.service';
import {PantallaLoginComponent} from './componentes/pantalla-login/pantalla-login.component';
import {HeaderComponent} from './componentes/header/header.component';
import {FooterComponent} from './componentes/footer/footer.component';
import {BotonesLoginComponent} from './componentes/botones-login/botones-login.component';
import { ListaRelacionTerminalRecursosComunitariosComponent } from './componentes/relacion-terminal-recursos-comunitarios/lista-relacion-terminal-recursos-comunitarios/lista-relacion-terminal-recursos-comunitarios.component';
import { ItemRelacionTerminalRecursosComunitariosComponent } from './componentes/relacion-terminal-recursos-comunitarios/item-relacion-terminal-recursos-comunitarios/item-relacion-terminal-recursos-comunitarios.component';
import { CrearRelacionTerminalRecursosComunitariosComponent } from './componentes/relacion-terminal-recursos-comunitarios/crear-relacion-terminal-recursos-comunitarios/crear-relacion-terminal-recursos-comunitarios.component';
import { ModificarRelacionTerminalRecursosComunitariosComponent } from './componentes/relacion-terminal-recursos-comunitarios/modificar-relacion-terminal-recursos-comunitarios/modificar-relacion-terminal-recursos-comunitarios.component';
import {
  CargaRelacionTerminalRecursosComunitariosService
} from "./servicios/relacion-terminal-recurso-comunitario/carga-relacion-terminal-recursos-comunitarios.service";

import {NgxPaginationModule} from 'ngx-pagination';
import {OrdenacionTablasService} from "./servicios/ordenacion-tablas.service";
import { FiltroBusquedaPipe } from './pipes/filtro-busqueda.pipe';
import { ListaTiposViviendaComponent } from './componentes/tipo-vivienda/lista-tipos-vivienda/lista-tipos-vivienda.component';
import { ListaTiposSituacionComponent } from './componentes/tipo-situacion/lista-tipos-situacion/lista-tipos-situacion.component';
import { ItemTipoViviendaComponent } from './componentes/tipo-vivienda/item-tipo-vivienda/item-tipo-vivienda.component';
import { CrearViviendaComponent } from './componentes/tipo-vivienda/crear-tipo-vivienda/crear-vivienda.component';
import { ModificarTipoViviendaComponent } from './componentes/tipo-vivienda/modificar-tipo-vivienda/modificar-tipo-vivienda.component';
import {CargaViviendaService} from "./servicios/carga-vivienda.service";
import { ItemTipoSituacionComponent } from './componentes/tipo-situacion/item-tipo-situacion/item-tipo-situacion.component';
import { CrearTipoSituacionComponent } from './componentes/tipo-situacion/crear-tipo-situacion/crear-tipo-situacion.component';
import { ModificarTipoSituacionComponent } from './componentes/tipo-situacion/modificar-tipo-situacion/modificar-tipo-situacion.component';
import { BorrarTipoViviendaComponent } from './componentes/tipo-vivienda/borrar-tipo-vivienda/borrar-tipo-vivienda.component';
import { BorrarTipoSituacionComponent } from './componentes/tipo-situacion/borrar-tipo-situacion/borrar-tipo-situacion.component';
import {InterceptorService} from "./interceptors/interceptor.service";
import { ListaAlarmasComponent } from './componentes/alarma/lista-alarmas/lista-alarmas.component';
import { CrearAlarmaComponent } from './componentes/alarma/crear-alarma/crear-alarma.component';
import { ModificarAlarmaComponent } from './componentes/alarma/modificar-alarma/modificar-alarma.component';
import { ItemAlarmaComponent } from './componentes/alarma/item-alarma/item-alarma.component';
import { ListaTerminalComponent } from './componentes/terminal/lista-terminal/lista-terminal.component';
import { ItemTerminalComponent } from './componentes/terminal/item-terminal/item-terminal.component';
import { CrearTerminalComponent } from './componentes/terminal/crear-terminal/crear-terminal.component';
import { ModificarTerminalComponent } from './componentes/terminal/modificar-terminal/modificar-terminal.component';
import {CargaTerminalesService} from "./servicios/terminal/carga-terminales.service";
import {CargaAlarmaService} from "./servicios/alarmas/carga-alarma.service";
import {CargaPacienteService} from "./servicios/paciente/carga-paciente.service";
import { BorrarRelacionTerminalRecursosComunitariosComponent } from "./componentes/relacion-terminal-recursos-comunitarios/borrar-relacion-terminal-recursos-comunitarios/borrar-relacion-terminal-recursos-comunitarios.component";
import { CrearPacienteComponent } from './componentes/paciente/crear-paciente/crear-paciente.component';
import { ItemPacienteComponent } from './componentes/paciente/item-paciente/item-paciente.component';
import { ListaPacienteComponent } from './componentes/paciente/lista-paciente/lista-paciente.component';
import { ModificarPacienteComponent } from './componentes/paciente/modificar-paciente/modificar-paciente.component';
import { ModificarRelacionPacientePersonaComponent } from './componentes/relacion-paciente-persona/modificar-relacion-paciente-persona/modificar-relacion-paciente-persona.component';
import { ItemRelacionPacientePersonaComponent } from './componentes/relacion-paciente-persona/item-relacion-paciente-persona/item-relacion-paciente-persona.component';
import { ListaRelacionPacientePersonaComponent } from './componentes/relacion-paciente-persona/lista-relacion-paciente-persona/lista-relacion-paciente-persona.component';
import { CrearRelacionPacientePersonaComponent } from './componentes/relacion-paciente-persona/crear-relacion-paciente-persona/crear-relacion-paciente-persona.component';
import { CrearCentroSanitarioAlarmaComponent } from './componentes/centro-sanitario-alarma/crear-centro-sanitario-alarma/crear-centro-sanitario-alarma.component';
import { ModificarCentroSanitarioAlarmaComponent } from './componentes/centro-sanitario-alarma/modificar-centro-sanitario-alarma/modificar-centro-sanitario-alarma.component';
import { ListaCentroSanitarioAlarmaComponent } from './componentes/centro-sanitario-alarma/lista-centro-sanitario-alarma/lista-centro-sanitario-alarma.component';
import { ItemCentroSanitarioAlarmaComponent } from './componentes/centro-sanitario-alarma/item-centro-sanitario-alarma/item-centro-sanitario-alarma.component';
import { ItemRecursoComunitarioAlarmaComponent } from './componentes/recurso-comunitario-alarma/item-recurso-comunitario-alarma/item-recurso-comunitario-alarma.component';
import { ListaRecursoComunitarioAlarmaComponent } from './componentes/recurso-comunitario-alarma/lista-recurso-comunitario-alarma/lista-recurso-comunitario-alarma.component';
import { CrearRecursoComunitarioAlarmaComponent } from './componentes/recurso-comunitario-alarma/crear-recurso-comunitario-alarma/crear-recurso-comunitario-alarma.component';
import { ModificarRecursoComunitarioAlarmaComponent } from './componentes/recurso-comunitario-alarma/modificar-recurso-comunitario-alarma/modificar-recurso-comunitario-alarma.component';
import { ModificarPersonaContactoAlarmaComponent } from './componentes/persona-contacto-alarma/modificar-persona-contacto-alarma/modificar-persona-contacto-alarma.component';
import { CrearPersonaContactoAlarmaComponent } from './componentes/persona-contacto-alarma/crear-persona-contacto-alarma/crear-persona-contacto-alarma.component';
import { ListaPersonaContactoAlarmaComponent } from './componentes/persona-contacto-alarma/lista-persona-contacto-alarma/lista-persona-contacto-alarma.component';
import { ItemPersonaContactoAlarmaComponent } from './componentes/persona-contacto-alarma/item-persona-contacto-alarma/item-persona-contacto-alarma.component';
import { ItemDispositivosAuxiliaresTerminalComponent } from './componentes/dispositivos-auxiliares-terminal/item-dispositivos-auxiliares-terminal/item-dispositivos-auxiliares-terminal.component';
import { ListaDispositivosAuxiliaresTerminalComponent } from './componentes/dispositivos-auxiliares-terminal/lista-dispositivos-auxiliares-terminal/lista-dispositivos-auxiliares-terminal.component';
import { CrearDispositivosAuxiliaresTerminalComponent } from './componentes/dispositivos-auxiliares-terminal/crear-dispositivos-auxiliares-terminal/crear-dispositivos-auxiliares-terminal.component';
import { ModificarDispositivosAuxiliaresTerminalComponent } from './componentes/dispositivos-auxiliares-terminal/modificar-dispositivos-auxiliares-terminal/modificar-dispositivos-auxiliares-terminal.component';
import { ModificarRelacionUsuarioCentroComponent } from './componentes/relacion-usuario-centro/modificar-relacion-usuario-centro/modificar-relacion-usuario-centro.component';
import { CrearRelacionUsuarioCentroComponent } from './componentes/relacion-usuario-centro/crear-relacion-usuario-centro/crear-relacion-usuario-centro.component';
import { ItemRelacionUsuarioCentroComponent } from './componentes/relacion-usuario-centro/item-relacion-usuario-centro/item-relacion-usuario-centro.component';
import { ListaRelacionUsuarioCentroComponent } from './componentes/relacion-usuario-centro/lista-relacion-usuario-centro/lista-relacion-usuario-centro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsersComponent,
    ItemUserComponent,
    ModificarUserComponent,
    CrearUserComponent,
    HomeComponent,
    ItemClasificacionAlarmaComponent,
    ModificarClasificacionAlarmaComponent,
    CrearClasificacionAlarmaComponent,
    ListaClasificacionesAlarmasComponent,
    ListaTiposCentrosSanitariosComponent,
    ItemTipoCentroSanitarioComponent,
    ModificarTipoCentroSanitarioComponent,
    CrearTipoCentroSanitarioComponent,
    ListaTiposRecursosComunitariosComponent,
    ItemTipoRecursoComunitarioComponent,
    ModificarTipoRecursoComunitarioComponent,
    CrearTipoRecursoComunitarioComponent,
    ListaTiposModalidadesPacientesComponent,
    ItemTipoModalidadPacienteComponent,
    ModificarTipoModalidadPacienteComponent,
    CrearTipoModalidadPacienteComponent,
    ListaTiposAlarmasComponent,
    ItemTipoAlarmaComponent,
    ModificarTipoAlarmaComponent,
    CrearTipoAlarmaComponent,
    ListaCentrosSanitariosComponent,
    ItemCentroSanitarioComponent,
    ModificarCentroSanitarioComponent,
    CrearCentroSanitarioComponent,
    ListaRecursosComunitariosComponent,
    ItemResursoComunitarioComponent,
    ModificarRecursoComunitarioComponent,
    CrearRecursoComunitarioComponent,
    ListaPersonasComponent,
    ItemPersonaComponent,
    ModificarPersonaComponent,
    CrearPersonaComponent,
    ListaDireccionesComponent,
    ItemDireccionComponent,
    ModificarDireccionComponent,
    CrearDireccionComponent,
    PantallaLoginComponent,
    HeaderComponent,
    FooterComponent,
    BotonesLoginComponent,
    ListaRelacionTerminalRecursosComunitariosComponent,
    ItemRelacionTerminalRecursosComunitariosComponent,
    CrearRelacionTerminalRecursosComunitariosComponent,
    ModificarRelacionTerminalRecursosComunitariosComponent,
    CrearRelacionTerminalRecursosComunitariosComponent,
    FiltroBusquedaPipe,
    ListaTiposViviendaComponent,
    ListaTiposSituacionComponent,
    ItemTipoViviendaComponent,
    CrearViviendaComponent,
    ModificarTipoViviendaComponent,
    ItemTipoSituacionComponent,
    CrearTipoSituacionComponent,
    ModificarTipoSituacionComponent,
    BorrarTipoViviendaComponent,
    BorrarTipoSituacionComponent,
    ListaAlarmasComponent,
    CrearAlarmaComponent,
    ModificarAlarmaComponent,
    ItemAlarmaComponent,
    ListaTerminalComponent,
    ItemTerminalComponent,
    CrearTerminalComponent,
    ModificarTerminalComponent,
    BorrarRelacionTerminalRecursosComunitariosComponent,
    CrearPacienteComponent,
    ItemPacienteComponent,
    ListaPacienteComponent,
    ModificarPacienteComponent,
    ModificarRelacionPacientePersonaComponent,
    ItemRelacionPacientePersonaComponent,
    ListaRelacionPacientePersonaComponent,
    CrearRelacionPacientePersonaComponent,
    CrearCentroSanitarioAlarmaComponent,
    ModificarCentroSanitarioAlarmaComponent,
    ListaCentroSanitarioAlarmaComponent,
    ItemCentroSanitarioAlarmaComponent,
    ItemRecursoComunitarioAlarmaComponent,
    ListaRecursoComunitarioAlarmaComponent,
    CrearRecursoComunitarioAlarmaComponent,
    ModificarRecursoComunitarioAlarmaComponent,
    ModificarPersonaContactoAlarmaComponent,
    CrearPersonaContactoAlarmaComponent,
    ListaPersonaContactoAlarmaComponent,
    ItemPersonaContactoAlarmaComponent,
    ItemDispositivosAuxiliaresTerminalComponent,
    ListaDispositivosAuxiliaresTerminalComponent,
    CrearDispositivosAuxiliaresTerminalComponent,
    ModificarDispositivosAuxiliaresTerminalComponent,
    ModificarRelacionUsuarioCentroComponent,
    CrearRelacionUsuarioCentroComponent,
    ItemRelacionUsuarioCentroComponent,
    ListaRelacionUsuarioCentroComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [
    CargaUserService,
    CargaClasificacionAlarmaService,
    CargaTipoCentroSanitarioService,
    CargaTipoRecursoComunitarioService,
    CargaTipoModalidadPacienteService,
    CargaTipoAlarmaService,
    CargaDireccionService,
    CargaCentroSanitarioService,
    CargaRecursoComunitarioService,
    CargaPersonaService,
    CargaRelacionTerminalRecursosComunitariosService,
    CargaViviendaService,
    CargaAlarmaService,
    CargaPacienteService,
    CargaTerminalesService,
    Title,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
