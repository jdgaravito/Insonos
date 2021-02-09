<script>
  import Title from "../UI/Title.svelte";
</script>

<div class="wrapper">
  <section class="content service1">
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
  </section>
  <figure class="imagen serviceimg1">
    <img
      srcset="/images/about/tecnologia-240w.jpg 240w, 
      /images/about/tecnologia-320w.jpg 320w,
      /images/about/tecnologia-480w.jpg 480w,
      /images/about/tecnologia-800w.jpg 800w,
      /images/about/tecnologia-1080w.jpg
      "
      sizes="(max-width: 300) 240px,
     (max-width: 320px) 280px,
     (max-width: 1080px) 440px,
     (max-width: 1280px) 800px,
     1080px"
      src="/images/about/tecnologia-1080w.jpg"
      alt="tecnologia de punta para medición de ruido"
    />
  </figure>

  <section class="content service2">
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
  </section>
  <figure class="imagen serviceimg2">
    <img
      srcset="/images/serv/design-320w.jpg 320w,
        /images/serv/design-480w.jpg 480w,
      /images/serv/design-800w.jpg 800w,
      /images/serv/design-1080w.jpg
      "
      sizes="(max-width: 320px) 280px,
     (max-width: 1080px) 440px,
     (max-width: 1280px) 800px,
     1080px"
      src="/images/serv/design-1080w.jpg"
      alt="consultoría y diseño acústico"
    />
  </figure>

  <section class="content service3">
    <div class="titlecontainer">
      <Title
        mode="h2-blue"
        bold="Insonorización y "
        regular="Control de Ruido"
      />
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
  </section>
  <figure class="imagen serviceimg3">
    <img
      srcset="/images/serv/aislamiento-320w.jpg 320w,
        /images/serv/aislamiento-480w.jpg 480w,
      /images/serv/aislamiento-800w.jpg 800w,
      /images/serv/aislamiento-1080w.jpg
      "
      sizes="(max-width: 320px) 280px,
     (max-width: 1080px) 440px,
     (max-width: 1280px) 800px,
     1080px"
      src="/images/serv/aislamiento-1080w.jpg"
      alt="Aislamiento acústico"
    />
  </figure>
  <section class="content service4">
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
  </section>
  <figure class="imagen serviceimg4">
    <img
      srcset="/images/serv/acondicionamiento-320w.jpg 320w,
        /images/serv/acondicionamiento-480w.jpg 480w,
      /images/serv/acondicionamiento-800w.jpg 800w,
      /images/serv/acondicionamiento-1080w.jpg
      "
      sizes="(max-width: 320px) 280px,
     (max-width: 1080px) 440px,
     (max-width: 1280px) 800px,
     1080px"
      src="/images/serv/acondicionamiento-1080w.jpg"
      alt="Acondicionamiento acústico"
    />
  </figure>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .content {
    padding: 4.5rem 6.25rem 1rem 6.25rem;
  }
  .titlecontainer {
    padding-bottom: 2.5rem;
    width: 400px;
  }
  p {
    font-weight: 300;
    opacity: 80%;
  }

  figure > img {
    display: block;
    object-fit: cover;
    width: 100%;
    max-height: 1080px;
  }

  @media all and (max-width: 1080px) {
    .wrapper {
      grid-template-columns: 1fr;
    }
    .content {
      padding: 4.5rem 6.25rem 4rem 6.25rem;
    }
  }
  @media all and (max-width: 600px) {
    .content {
      padding: 2rem 2rem 4rem 2rem;
    }
  }
  @media all and (max-width: 600px){
    .titlecontainer {
    padding-bottom: 2.5rem;
    width: auto;
  }
   figure > img {
    width: 100%;
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
