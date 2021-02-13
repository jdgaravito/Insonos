<script>
  import Title from "../UI/Title.svelte";
</script>

<div class="wrapper">
  <section class="content service1">
    <div class="titlecontainer">
      <Title mode="h2-blue" bold="Medición de " regular="Ruido" />
    </div>
    <p>
      ¿Necesitas cumplir la legislación ambiental y conocer cual es el nivel de
      ruido de tu industria, fabrica, o local comercial y saber como afecta las
      zonas residenciales aledañas o a la salud de tus colaboradores? Utilizamos
      la última tecnología para medir, analizar y certificar el nivel de ruido
      en diferentes condiciones. Obtendrás un informe detallado y te
      propondremos alternativas accesibles para mitigarlo.
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
      ¿Necesitas ayuda en el diseño acústico y sonoro de tu proyecto? Te
      asesoramos muy de cerca en la planeación, diseño y ejecución los elementos
      acústicos de proyectos arquitectónicos e industriales. Comenzamos con la
      evaluación de tus necesidades específicas para luego predecir
      acústicamente la respuesta del espacio. Elaboramos el diseño de los planos
      técnicos, los materiales y componentes necesarios para que obtengas el
      resultado soñado.
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
      ¿Tienes problemas con el ruido interior o exterior? Podemos aislar tu
      espacio mediante diferentes técnicas arquitectónicas y constructivas para
      controlar el nivel de ruido manteniendo la estética y calidad del hábitat.
      Utilizamos los mejores materiales aislantes, incluso en ventanería o
      puertas. Garantizamos un resultado perfecto.
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
      ¿Deseas que tu espacio suene mucho mejor? ¿Tienes problemas de eco,
      reverberación o sonido distorsionado? Mediante software especializado e
      ingeniería logramos obtener el mejor diseño y los elementos necesarios
      (paneles acústicos, trampas de bajos, acabados de materiales, metraje de
      absorción) para potenciar las propiedades acústicas de tu espacio o
      habitación. Juntos podemos llevarlo al siguiente nivel.
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
  @media all and (max-width: 600px) {
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
