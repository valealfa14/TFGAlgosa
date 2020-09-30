<template>
<div id="Home">
  <section id="content">
    <div class="container-fluid bg-1 text-center">
      <img
        src="../assets/Banner3.jpg"
        class="img-responsive"
        style="float:right;widows:500px;height:300px;"
      />
    </div>
    <div class="container-fluid bg-3 text-center">
      <h3>Nuestros Pilares</h3>
      <br />
      <div class="col-sm-4">
        <strong>Pasión:</strong>
        <p style="font-size:100%;">
          Por el talento, por el trabajo en equipo, comprometidos por lo que
          hacemos y cómo lo hacemos, por cuidar y respetar al entorno que nos
          rodea, por todos y cada uno de nuestros clientes y colaboradores.
        </p>
      </div>
      <div class="col-sm-4">
        <strong>Sensatez:</strong>
        <p style="font-size:100%;">
          Aportamos nuestra mirada segura al futuro, evaluando constantemente el
          impacto, midiendo y traduciendo nuestras acciones en beneficios
          tangibles. Pensamos en global y actuamos en local, íntegros en todas
          nuestras actuaciones.
        </p>
      </div>
      <div class="col-sm-4">
        <strong>Orientación a las personas:</strong>
        <p style="font-size:100%;">
          Justicia, equidad, reconocimiento, esfuerzo, desarrollo.
        </p>
      </div>
      <div class="col-sm-4">
        <strong>Siempre la mejor versión:</strong>
        <p style="font-size:100%;">
          Flexibilidad, agilidad, orientación al cliente.
        </p>
      </div>
    </div>
	</section>
	<footer class="foot">
	<app-footer></app-footer>
	</footer>
  </div>
</template>

<script>
import Footer from './Footer.vue';

export default {	
  name: "Home",
  props: {
    msg: String,
  },
  components: {
	appFooter: Footer,
  }
};
</script>

<style>
/*Body*/
#content {
  padding: 50px 0%;
  background-color: rgb(243, 243, 243);
  text-align: justify;
  height: 10vh;
  position: relative;
  display: table;
  width: 100%;
  transition: all 0.75s ease;
}

.visible_menu #content {
  transform: translateX(260px);
}

/*Nuestros Pilares*/
.bg-1 {
  background-color: rgb(243, 243, 243);
  color: #ffffff;
}

.bg-3 {
  background-color: #ffffff;
  color: #555555;
}
.container-fluid {
  padding-top: 50px;
  padding-bottom: 40px;
  width: 100%;
}
.foot{
  border: none; 
  position: fixed; 
  width: 100%;
  bottom: 0; 
  z-index:50;
  height: 9% !important;
}
</style>
