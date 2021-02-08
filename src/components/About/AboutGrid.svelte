<script>
  import Title from "../UI/Title.svelte";
</script>

<div class="wrapper">
  <div class="container service1">
    <div class="titlecontainer">
      <Title mode="h2-blue" bold="Experiencia " regular="y conocimiento" />
    </div>
    <p>
      Tendrás a tu disposición un equipo multidisciplinario de profesionales en
      acústica, arquitectura e ingeniería de sonido para apoyar tus proyectos.
      Hemos trabajado de la mano en diferentes industrías y sectores (iglesias,
      universidades, fábricas, hoteles y centros comerciales). 
    </p>
    <br /><p>¿No nos crees? </p> <a href="/portafolio">Mira nuestro portafolio</a>
  </div>
  <div class="image serviceimg1">
    <img src="/images/equipo.jpg" alt="Equipo Profesional" />
  </div>
  <div class="container service2">
    <div class="titlecontainer">
      <Title mode="h2-blue" bold="Innovación" regular="y tecnología de punta" />
    </div>
    <p>
      En tu proyecto utilizaremos herramientas y software altamente
      especializado para obtener el mejor resultado acústico y sonoro.
      Garantizamos alta precisión en nuestras mediciones, diseños y procesos
      constructivos.
    </p>
  </div>
  <div class="image serviceimg2">
    <img src="/images/tecnologia.jpg" alt="tecnologia de medicion de ruido" />
  </div>
  <div class="container service3">
    <div class="titlecontainer">
      <Title mode="h2-blue" bold="Atención " regular="Ultrapersonalizada" />
    </div>
    <p>
      No es mentira, dedicamos cada segundo para que estes satisfecho con el
      resultado final. No hay proyecto pequeño, y somos reconocidos por tener
      una mentalidad abierta a la hora de abordar diferentes proyectos con el
      fin de llegar a soluciones creativas y accesibles. Gracias a eso logramos
      la reducción y eliminación de problemas como el eco, la reverberación y la
      distorsión entre otros.
    </p>
  </div>
  <div class="image serviceimg3">
    <img src="/images/atencion.jpg" alt="Atencion personalizada" />
  </div>
  <div class="container service4">
    <div class="titlecontainer">
      <Title
        mode="h2-blue"
        bold="Materiales "
        regular="de la más alta calidad"
      />
    </div>
    <p>
      Ademas de ser funcionales, usamos los mejores materiales en la elaboración
      de paneles acústicos, trampas de bajos, ventanería acústica para que tu
      espacio no solo se vea y se escuche con estilo. 
    </p>
  </div>
  <div class="image serviceimg4">
    <img src="/images/espuma.jpg" alt="espuma aislante" />
  </div>
</div>

<style>
  .wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }

  .image {
    max-width: 100%;
    height: auto;
    display: block;
  }
  .container {
    padding: 4.5rem 6.25rem 1rem 6.25rem;
  }
  .titlecontainer {
    padding-bottom: 2.5rem;
    width: 350px;
  }
  p {
    font-weight: 300;
    opacity: 80%;
  }
  a {
    text-decoration: none;
    font-weight: 700;
  }
  @media all and (max-width: 1280px) {
    p {
      font-size: 0.875rem;
    }
  }
  @media all and (max-width: 1149px) {
    .wrapper {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }

    .container {
      padding-bottom: 4rem;
    }
  }
  @media all and (max-width: 570px) {
    .container {
      padding-right: 10px;
      padding-left: 10px;
    }
  }

  @media all and (min-width: 1150px) {
    .service1 {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    .serviceimg1 {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
    .service2 {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
    .serviceimg2 {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
    .service3 {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }
    .serviceimg3 {
      grid-column: 2 / 3;
      grid-row: 3 / 4;
    }
    .service4 {
      grid-column: 2/3;
      grid-row: 4 / 5;
    }
    .serviceimg4 {
      grid-column: 1/2;
      grid-row: 4 / 5;
    }
  }
</style>
