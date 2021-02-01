<script>
  import Title from "../UI/Title.svelte";
</script>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }

   .image {
    max-width: 100%; height: auto;
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
    .container{
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

<div class="wrapper">
  <div class="container service1">
    <div class="titlecontainer">
      <Title mode="h2-blue" bold="Medición de " regular="Ruido" />
    </div>
    <p>
      Realizamos mediciones in situ para determinar los niveles de ruido de
      fuentes fijas, y su afectación en zonas residenciales e actividades
      industriales. Contamos con equipamiento y herramientas de medición
      certificadas para el análisis de ruido en diversas condiciones. Utilizamos
      Software para el modelado y cálculo de parámetros de ruido para determinar
      si su proyecto cumple con la normatividad nacional e internacional.
    </p>
  </div>
  <div class="image serviceimg1">
    <img src="/images/components/medidor.jpg" alt="Medición de ruido" />
  </div>
  <div class="container service2">
    <div class="titlecontainer">
      <Title mode="h2-blue" bold="Consultoría y" regular="Diseño" />
    </div>
    <p>
      Brindamos asesoría en planeación, diseño y ejecución de proyectos
      arquitectónicos residenciales, industriales y corporativos que sean
      impactados por elementos de audio. Nos apoyamos en software de diseño y
      predicción acústica de última tecnología; lo cual nos permite desarrollar
      todos los proyectos de nuestros clientes con el más alto nivel de
      precisión.
    </p>
  </div>
  <div class="image serviceimg2">
    <img src="/images/components/pc.jpg" alt="Medición de ruido" />
  </div>
  <div class="container service3">
    <div class="titlecontainer">
      <Title
        mode="h2-blue"
        bold="Insonorización y "
        regular="Control de Ruido" />
    </div>
    <p>
      La tranquilidad, el silencio y el confort acústico son muy importantes en
      cualquier recinto. Determinar y analizar las fuentes de ruido externas (o
      internas) permite diseñar una solución apropiada y personalizada a
      cualquier problemática de ruido. El aislamiento acústico o insonorización
      comprende técnicas y sistemas constructivos especializados para la
      reducción del ruido, como ventanería adecuada, materiales aislantes.
      Realizamos para usted la ejecucíon de obras insonorizadas.
    </p>
  </div>
  <div class="image serviceimg3">
    <img src="/images/components/ventanaacust.jpg" alt="Medición de ruido" />
  </div>
  <div class="container service4">
    <div class="titlecontainer">
      <Title mode="h2-blue" bold="Acondicionamiento " regular="Acústico" />
    </div>
    <p>
      Mediante software de diseño, dimensionamos y calculamos los componentes
      acústicos necesarios para lograr un óptimo comportamiento sonoro en una
      sala (paneles acústicos, trampas de bajos, acabados de materiales, metraje
      de absorción, etc.) Logramos la reducción y eliminación de problemas como
      eco, reverberación y distorsión para proveerle a sus audiencias la mejor
      experiencia acústica posible.
    </p>
  </div>
  <div class="image serviceimg4">
    <img src="/images/components/panel.jpg" alt="Medición de ruido" />
  </div>

</div>
