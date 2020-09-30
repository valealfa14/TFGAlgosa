<template>
<div id="Registrar">

<form>
    <h4>Datos Personales</h4>
    <div class="form-group col-md-4">
                    <label for="inputNombre">Nombre</label>
                    <input type="text" class="form-control" id="inputNombre" placeholder="Nombre">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputApellidos">Primer Apellido</label>
                    <input type="text" class="form-control" id="inputApellidos" placeholder="Apellidos">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputApellidos">Segundo Apellido</label>
                    <input type="text" class="form-control" id="inputApellidos" placeholder="Apellidos">
                  </div>
                    <div class="form-group col-md-3">
                  <label for="inputFechaNacimiento">Fecha de Nacimiento</label>
                  <input type="datetime" class="form-control" id="inputFechaNacimiento" placeholder="14/05/1999">
                 </div>
                 <div class="form-group col-md-4">
                  <label for="inputCédula">Número de Cédula</label>
                  <input type="text" class="form-control" id="inputCédula" placeholder="2-0000-0000">
                </div>
                  <div class="form-group col-md-5">
                  <label for="inputDirección">Dirección</label>
                  <input type="text" class="form-control" id="inputDirección" placeholder="Provincia, cantón, y distrito">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputTelefono">Telefono</label>
                    <input type="" class="form-control" id="inputTelefono" placeholder="89415621">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputCorreo">Correo</label>
                    <input type="email" class="form-control" id="inputCorreo" placeholder="mary@example.com">
                  </div>
                  <div class="form-group col-md-4 ">
                    <label for="inputCargo">Cargo</label>
                    <input type="text" class="form-control" id="inputCargo" placeholder="Ventas">
                  </div>
                  <div class="form-group col-md-2 ">
                    <label for="inputSalarioOrdinario">Salario Ordinario</label>
                    <input type="text" class="form-control" id="inputSalarioOrdinario" placeholder="₡"> 
                  </div>
  <dt>Tipo de Empleado</dt>
    <label for="inputFijo" class="checkbox-inline">
      <input type="checkbox" id="inputFijo" value="">Fijo
    </label>
    <label for="inputTemporal" class="checkbox-inline">
      <input type="checkbox" id="inputTemporal" value="">Temporal
    </label>
       
                  <hr>
                  <h4>Historial Clinico</h4>
                  <div class="form-group">
                    <textarea class="form-control" rows="4" id="inputHistorialClinico"></textarea>
                  </div>
                  <h4>Información Curricular</h4>
                  <div class="form-group">
                    <textarea class="form-control" rows="4" id="inputInformaciónCurricular"></textarea>
                 </div>
                 <h4>Experiencia Laboral</h4>
                    <textarea class="form-control" rows="4" id="inputExperienciaLaboral"></textarea>
                  <div class="form-group">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2">
                        <label class="form-check-label" for="invalidCheck2">
                          Activo
                        </label>
                      </div>
                    </div>
                    <hr>
                  <h4>Datos De Contrato</h4>
                  <div class="form-group col-md-6">
                    <label for="inputFechaIngreso">Fecha De Ingreso</label>
                    <input type="datetime" class="form-control" id="inputFechaIngreso" placeholder="24/03/2019">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputFechaSalida">Fecha De Salida</label>
                    <input type="datetime" class="form-control" id="inputFechaSalida" placeholder="24/03/2020">
                  </div>
                  <label for="inputDetalleContrato">Detalle</label>
                    <textarea class="form-control" rows="4" id="inputDetalleContrato"></textarea>
                    <div class="form-group">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2">
                      <label class="form-check-label" for="invalidCheck2">
                        Activo
                      </label>
                    </div>
                  </div>
                  <hr>
                    <button class="btn btn-primary" type="submit">Registrar</button>
              
    
    </form>
</div>

</template>

// <script>
// export default {
// name: 'RegisterEmployee',
// props: {
// msg: String
// }
// }
// </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
margin: 40px 0 0;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
</style>
