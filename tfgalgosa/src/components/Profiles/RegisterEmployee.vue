<template>
  <div id="Registrar">
    <head>
      <meta charset="UTF-8" />
      <!-- Cargamos las fuentes necesarias-->
      <link
        href="https://fonts.googleapis.com/css?family=Raleway"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    </head>
    <div>
      <section id="content">
        <div class="container">
          <h2>Equipo Directo</h2>
          <b-tabs>
            <b-tab title="Modificar Empleado " active>
              <div class="container">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th><strong>Cédula</strong></th>
                      <th><strong>Primer Nombre</strong></th>
                      <th><strong>Apellidos</strong></th>
                      <th><strong>Telefono</strong></th>
                      <th><strong>Email</strong></th>
                      <th><strong>Puesto</strong></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2-0000-0000</td>
                      <td>John</td>
                      <td>Doe Moe</td>
                      <td>89415721</td>
                      <td>john@example.com</td>
                      <td>Gerente</td>
                    </tr>
                    <tr>
                      <td>2-0000-0000</td>
                      <td>Mary</td>
                      <td>Moe Doe</td>
                      <td>89415721</td>
                      <td>mary@example.com</td>
                      <td>Gerente</td>
                    </tr>
                    <tr>
                      <td>2-0000-0000</td>
                      <td>July</td>
                      <td>Dooley Moe</td>
                      <td>89415721</td>
                      <td>july@example.com</td>
                      <td>Gerente</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-tab>
            <b-tab title="Registrar Empleado " active>
              <form>
                <h4>Datos Personales</h4>

                <div class="form-group col-md-4">
                  <label for="inputNombre">Nombre</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputNombre"
                    placeholder="Nombre"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputApellidos">Primer Apellido</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputApellidos"
                    placeholder="Apellidos"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputApellidos">Segundo Apellido</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputApellidos"
                    placeholder="Apellidos"
                  />
                </div>
                <div class="form-group col-md-3">
                  <label for="inputFechaNacimiento">Fecha de Nacimiento</label>
                  <input
                    type="datetime"
                    class="form-control"
                    id="inputFechaNacimiento"
                    placeholder="14/05/1999"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputCédula">Número de Cédula</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCédula"
                    placeholder="2-0000-0000"
                  />
                </div>
                <div class="form-group col-md-5">
                  <label for="inputDirección">Dirección</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputDirección"
                    placeholder="Provincia, cantón, y distrito"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputTelefono">Telefono</label>
                  <input
                    type=""
                    class="form-control"
                    id="inputTelefono"
                    placeholder="89415621"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputCorreo">Correo</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputCorreo"
                    placeholder="mary@example.com"
                  />
                </div>
                <div class="form-group col-md-4 ">
                  <label for="inputCargo">Cargo</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCargo"
                    placeholder="Ventas"
                  />
                </div>
                <div class="form-group col-md-2 ">
                  <label for="inputSalarioOrdinario">Salario Ordinario</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputSalarioOrdinario"
                    placeholder="₡"
                  />
                </div>
                <dt>Tipo de Empleado</dt>
                <label for="inputFijo" class="checkbox-inline">
                  <input type="checkbox" id="inputFijo" value="" />Fijo
                </label>
                <label for="inputTemporal" class="checkbox-inline">
                  <input type="checkbox" id="inputTemporal" value="" />Temporal
                </label>

                <hr />
                <h4>Historial Clinico</h4>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    rows="4"
                    id="inputHistorialClinico"
                  ></textarea>
                </div>
                <h4>Información Curricular</h4>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    rows="4"
                    id="inputInformaciónCurricular"
                  ></textarea>
                </div>
                <h4>Experiencia Laboral</h4>
                <textarea
                  class="form-control"
                  rows="4"
                  id="inputExperienciaLaboral"
                ></textarea>
                <div>
                  <b-form-checkbox switch size="lg">Activo</b-form-checkbox>
                </div>
                <hr />
                <h4>Datos De Contrato</h4>
                <div class="form-group col-md-6">
                  <label for="inputFechaIngreso">Fecha De Ingreso</label>
                  <input
                    type="datetime"
                    class="form-control"
                    id="inputFechaIngreso"
                    placeholder="24/03/2019"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputFechaSalida">Fecha De Salida</label>
                  <input
                    type="datetime"
                    class="form-control"
                    id="inputFechaSalida"
                    placeholder="24/03/2020"
                  />
                </div>
                <label for="inputDetalleContrato">Detalle</label>
                <textarea
                  class="form-control"
                  rows="4"
                  id="inputDetalleContrato"
                ></textarea>
                <div>
                  <b-form-checkbox switch size="lg">Activo</b-form-checkbox>
                </div>
                <hr />
                <b-button variant="danger">Registrar</b-button>
              </form>
            </b-tab>
          </b-tabs>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/*Body*/
#content {
  
  background-color: rgb(243, 243, 243);
  text-align: justify;
  height: 100vh;
  position: relative;
  display: table;
  width: 100%;
  transition: all 0.75s ease;
}

</style>
