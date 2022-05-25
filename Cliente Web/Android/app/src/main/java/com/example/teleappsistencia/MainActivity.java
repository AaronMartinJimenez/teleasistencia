package com.example.teleappsistencia;

import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.view.Menu;
import android.widget.ExpandableListView;
import com.example.teleappsistencia.modelos.Token;
import com.example.teleappsistencia.ui.fragments.alarma.InsertarAlarmaFragment;
import com.example.teleappsistencia.ui.fragments.alarma.ListarAlarmasFragment;
import com.example.teleappsistencia.ui.fragments.centroSanitarioEnAlarma.InsertarCentroSanitarioEnAlarmaFragment;
import com.example.teleappsistencia.ui.fragments.centroSanitarioEnAlarma.ListarCentrosSanitariosEnAlarmaFragment;
import com.example.teleappsistencia.ui.fragments.clasificacionAlarma.InsertarClasificacionAlarmaFragment;
import com.example.teleappsistencia.ui.fragments.clasificacionAlarma.ListarClasificacionAlarmaFragment;
import com.example.teleappsistencia.ui.fragments.alarma.ListarAlarmasDeHoyFragment;
import com.example.teleappsistencia.ui.fragments.alarma.ListarAlarmasSinAsignarFragment;
import com.example.teleappsistencia.ui.fragments.alarma.ListarMisAlarmasFragment;
import com.example.teleappsistencia.ui.fragments.personaContactoEnAlarma.InsertarPersonaContactoEnAlarmaFragment;
import com.example.teleappsistencia.ui.fragments.personaContactoEnAlarma.ListarPersonasContactoEnAlarmaFragment;
import com.example.teleappsistencia.ui.fragments.recursosComunitariosEnAlarma.InsertarRecursosComunitariosEnAlarmaFragment;
import com.example.teleappsistencia.ui.fragments.recursosComunitariosEnAlarma.ListarRecursosComunitariosEnAlarmaFragment;
import com.example.teleappsistencia.ui.fragments.tipoAlarma.InsertarTipoAlarmaFragment;
import com.example.teleappsistencia.ui.fragments.tipoAlarma.ListarTipoAlarmaFragment;
import com.example.teleappsistencia.ui.menu.ExpandableListAdapter;
import com.example.teleappsistencia.ui.menu.MenuModel;
import com.example.teleappsistencia.utilidades.Constantes;
import com.example.teleappsistencia.utilidades.Utilidad;
import com.google.android.material.navigation.NavigationView;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.widget.Toolbar;
import androidx.core.view.GravityCompat;
import com.example.teleappsistencia.ui.fragments.centro_sanitario.FragmentInsertarCentroSanitario;
import com.example.teleappsistencia.ui.fragments.centro_sanitario.FragmentListarCentroSanitario;
import com.example.teleappsistencia.ui.fragments.centro_sanitario.FragmentModificarCentroSanitario;
import com.example.teleappsistencia.ui.fragments.recurso_comunitario.FragmentInsertarRecursoComunitario;
import com.example.teleappsistencia.ui.fragments.recurso_comunitario.FragmentListarRecursoComunitario;
import com.example.teleappsistencia.ui.fragments.recurso_comunitario.FragmentModificarRecursoComunitario;
import com.example.teleappsistencia.ui.fragments.tipo_centro_sanitario.FragmentInsertarTipoCentroSanitario;
import com.example.teleappsistencia.ui.fragments.tipo_centro_sanitario.FragmentListarTipoCentroSanitario;
import com.example.teleappsistencia.ui.fragments.tipo_centro_sanitario.FragmentModificarTipoCentroSanitario;
import com.example.teleappsistencia.ui.fragments.tipo_modalidad_paciente.FragmentInsertarTipoModalidadPaciente;
import com.example.teleappsistencia.ui.fragments.tipo_modalidad_paciente.FragmentListarTipoModalidadPaciente;
import com.example.teleappsistencia.ui.fragments.tipo_modalidad_paciente.FragmentModificarTipoModalidadPaciente;
import com.example.teleappsistencia.ui.fragments.tipo_recurso_comunitario.FragmentInsertarTipoRecursoComunitario;
import com.example.teleappsistencia.ui.fragments.tipo_recurso_comunitario.FragmentListarTipoRecursoComunitario;
import com.example.teleappsistencia.ui.fragments.tipo_recurso_comunitario.FragmentModificarTipoRecursoComunitario;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.appcompat.app.AppCompatActivity;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


public class MainActivity extends AppCompatActivity implements NavigationView.OnNavigationItemSelectedListener {

    private ExpandableListAdapter expandableListAdapter;
    private ExpandableListView expandableListView;
    private List<MenuModel> headerList = new ArrayList<>();
    private HashMap<MenuModel, List<MenuModel>> childList = new HashMap<>();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        /* Iniciamos el servicio de notificación de Alarmas
        * FIXME: evaluar el rol del Usuario, de momento queda mockeado. */
        String rol = "Teleoperador";
        if(rol.equals("Teleoperador")) {
            Utilidad.iniciarEscuchaAlarmas(this);
        }

        //Iniciamos el token. Esto se cambiará (o se quitará) cuando Samuel introduzca su parte
        // FIXME: cargar el token de la forma que Samuel tenga implementada
        Token.cargarToken("admin", "admin");

        // Realizo una petición a la API para cargar la cabecera del menu con los datos del usuario logueado.
        //loadMenuHeader();


        expandableListView = findViewById(R.id.expandableListView);
        prepareMenuData();
        populateExpandableList();

        DrawerLayout drawer = findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.addDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);
    }

    @Override
    public void onBackPressed() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);


        return super.onOptionsItemSelected(item);
    }

    @Override
    public boolean onNavigationItemSelected(MenuItem item) {



        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }

    private void prepareMenuData() {

        String[] childNames = {getResources().getString(R.string.menu_insertar), getResources().getString(R.string.menu_modificar), getResources().getString(R.string.menu_listar)};
        List<MenuModel> childModelsList;
        MenuModel menuModel;


        // Menu Alarma.
        childModelsList = new ArrayList<>();
        menuModel = new MenuModel(getResources().getString(R.string.menu_alarma), true, true, null);
        headerList.add(menuModel);

        // FIXME: Evaluar el rol de usuario y si es Profesor, cargar este grupo. Mockeado.
        String rol = "Profesor";
        if(rol.equals("Profesor")) {
            childModelsList.add(new MenuModel(childNames[0], false, false, new InsertarAlarmaFragment()));
        }
        childModelsList.add(new MenuModel(childNames[2], false, false, new ListarAlarmasFragment()));
        childModelsList.add(new MenuModel(Constantes.SIN_ASIGNAR, false, false, new ListarAlarmasSinAsignarFragment()));
        childModelsList.add(new MenuModel(Constantes.MIS_ALARMAS, false, false, new ListarMisAlarmasFragment()));
        childModelsList.add(new MenuModel(Constantes.ALARMAS_DE_HOY, false, false, new ListarAlarmasDeHoyFragment()));

        if (menuModel.hasChildren()) {
            childList.put(menuModel, childModelsList);
        } else{
            childList.put(menuModel, null);
        }


        // Menu Tipo Alarma.
        childModelsList = new ArrayList<>();
        menuModel = new MenuModel(getResources().getString(R.string.menu_tipo_alarma), true, true, null);
        headerList.add(menuModel);
        childModelsList.add(new MenuModel(childNames[0], false, false, new InsertarTipoAlarmaFragment()));
        childModelsList.add(new MenuModel(childNames[2], false, false, new ListarTipoAlarmaFragment()));

        if (menuModel.hasChildren()) {
            childList.put(menuModel, childModelsList);
        } else{
            childList.put(menuModel, null);
        }

        // Menu Clasificacion Alarma.
        childModelsList = new ArrayList<>();
        menuModel = new MenuModel(getResources().getString(R.string.menu_clasificacion_alarma), true, true, null);
        headerList.add(menuModel);
        childModelsList.add(new MenuModel(childNames[0], false, false, new InsertarClasificacionAlarmaFragment()));
        childModelsList.add(new MenuModel(childNames[2], false, false, new ListarClasificacionAlarmaFragment()));

        if (menuModel.hasChildren()) {
            childList.put(menuModel, childModelsList);
        } else{
            childList.put(menuModel, null);
        }

        // Menu Centro Sanitario en Alarma.
        childModelsList = new ArrayList<>();
        menuModel = new MenuModel(getResources().getString(R.string.menu_centro_sanitario_en_alarma), true, true, null);
        headerList.add(menuModel);
        childModelsList.add(new MenuModel(childNames[0], false, false, new InsertarCentroSanitarioEnAlarmaFragment()));
        childModelsList.add(new MenuModel(childNames[2], false, false, new ListarCentrosSanitariosEnAlarmaFragment()));

        if (menuModel.hasChildren()) {
            childList.put(menuModel, childModelsList);
        } else{
            childList.put(menuModel, null);
        }

        // Menu Recursos Comunitarios en Alarma.
        childModelsList = new ArrayList<>();
        menuModel = new MenuModel(getResources().getString(R.string.menu_recursos_comunitarios_en_alarma), true, true, null);
        headerList.add(menuModel);
        childModelsList.add(new MenuModel(childNames[0], false, false, new InsertarRecursosComunitariosEnAlarmaFragment()));
        childModelsList.add(new MenuModel(childNames[2], false, false, new ListarRecursosComunitariosEnAlarmaFragment()));

        if (menuModel.hasChildren()) {
            childList.put(menuModel, childModelsList);
        } else{
            childList.put(menuModel, null);
        }

        // Menu Persona de contacto en alarma.
        childModelsList = new ArrayList<>();
        menuModel = new MenuModel(getResources().getString(R.string.menu_persona_de_contacto_en_alarma), true, true, null);
        headerList.add(menuModel);
        childModelsList.add(new MenuModel(childNames[0], false, false, new InsertarPersonaContactoEnAlarmaFragment()));
        childModelsList.add(new MenuModel(childNames[2], false, false, new ListarPersonasContactoEnAlarmaFragment()));

        if (menuModel.hasChildren()) {
            childList.put(menuModel, childModelsList);
        } else{
            childList.put(menuModel, null);
        }

        // Menu Tipo_Centro_Sanitario.
        childModelsList = new ArrayList<>();
        menuModel = new MenuModel(getResources().getString(R.string.menu_tipoCentroSanitario), true, true, null);
        headerList.add(menuModel);
        childModelsList.add(new MenuModel(childNames[0], false, false, new FragmentInsertarTipoCentroSanitario()));
        childModelsList.add(new MenuModel(childNames[1], false, false, new FragmentModificarTipoCentroSanitario()));
        childModelsList.add(new MenuModel(childNames[2], false, false, new FragmentListarTipoCentroSanitario()));

        if (menuModel.hasChildren()) {
            childList.put(menuModel, childModelsList);
        } else {
            childList.put(menuModel, null);
        }

        // Menu Tipo_Modidalidad_Paciente.
        childModelsList = new ArrayList<>();
        menuModel = new MenuModel(getResources().getString(R.string.menu_tipoModalidadPaciente), true, true, null);
        headerList.add(menuModel);
        childModelsList.add(new MenuModel(childNames[0], false, false, new FragmentInsertarTipoModalidadPaciente()));
        childModelsList.add(new MenuModel(childNames[1], false, false, new FragmentModificarTipoModalidadPaciente()));
        childModelsList.add(new MenuModel(childNames[2], false, false, new FragmentListarTipoModalidadPaciente()));

        if (menuModel.hasChildren()) {
            childList.put(menuModel, childModelsList);
        } else {
            childList.put(menuModel, null);
        }

        // Menu Centro_Sanitario.
        childModelsList = new ArrayList<>();
        menuModel = new MenuModel(getResources().getString(R.string.menu_centroSanitario), true, true, null);
        headerList.add(menuModel);
        childModelsList.add(new MenuModel(childNames[0], false, false, new FragmentInsertarCentroSanitario()));
        childModelsList.add(new MenuModel(childNames[1], false, false, new FragmentModificarCentroSanitario()));
        childModelsList.add(new MenuModel(childNames[2], false, false, new FragmentListarCentroSanitario()));

        if (menuModel.hasChildren()) {
            childList.put(menuModel, childModelsList);
        } else {
            childList.put(menuModel, null);
        }

        // Menu Tipo_Recurso_Comunitario.
        childModelsList = new ArrayList<>();
        menuModel = new MenuModel(getResources().getString(R.string.menu_tipoRecursoComunitario), true, true, null);
        headerList.add(menuModel);
        childModelsList.add(new MenuModel(childNames[0], false, false, new FragmentInsertarTipoRecursoComunitario()));
        childModelsList.add(new MenuModel(childNames[1], false, false, new FragmentModificarTipoRecursoComunitario()));
        childModelsList.add(new MenuModel(childNames[2], false, false, new FragmentListarTipoRecursoComunitario()));

        if (menuModel.hasChildren()) {
            childList.put(menuModel, childModelsList);
        } else {
            childList.put(menuModel, null);
        }

        // Menu Recurso_Comunitario.
        childModelsList = new ArrayList<>();
        menuModel = new MenuModel(getResources().getString(R.string.menu_recursoComunitario), true, true, null);
        headerList.add(menuModel);
        childModelsList.add(new MenuModel(childNames[0], false, false, new FragmentInsertarRecursoComunitario()));
        childModelsList.add(new MenuModel(childNames[1], false, false, new FragmentModificarRecursoComunitario()));
        childModelsList.add(new MenuModel(childNames[2], false, false, new FragmentListarRecursoComunitario()));

        if (menuModel.hasChildren()) {
            childList.put(menuModel, childModelsList);
        } else {
            childList.put(menuModel, null);
        }

    }

    private void populateExpandableList() {

        expandableListAdapter = new ExpandableListAdapter(this, headerList, childList);
        expandableListView.setAdapter(expandableListAdapter);

        /* TODO: que alguien comente qué hace esto por favor... */
        expandableListView.setOnGroupClickListener(new ExpandableListView.OnGroupClickListener() {
            @Override
            public boolean onGroupClick(ExpandableListView parent, View v, int groupPosition, long id) {

                if (headerList.get(groupPosition).isGroup()) {
                    if (!headerList.get(groupPosition).hasChildren()) {
                    }
                }

                return false;
            }
        });

        expandableListView.setOnChildClickListener(new ExpandableListView.OnChildClickListener() {
            @Override
            public boolean onChildClick(ExpandableListView parent, View v, int groupPosition, int childPosition, long id) {

                if (childList.get(headerList.get(groupPosition)) != null) {
                    MenuModel model = childList.get(headerList.get(groupPosition)).get(childPosition);

                    getSupportFragmentManager().beginTransaction()
                            .replace(R.id.main_fragment, model.getFragment())
                            .addToBackStack(null)
                            .commit();
                }
                DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
                if (drawer.isDrawerOpen(GravityCompat.START)) {
                    drawer.closeDrawer(GravityCompat.START);
                }
                return false;
            }
        });
    }


}
