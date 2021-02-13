<script>
  import Title from "../UI/Title.svelte";
</script>

<div class="wrapper">
  <section class="content service1">
    <div class="titlecontainer">
      <Title mode="h2-blue" bold="Experiencia " regular="y conocimiento" />
    </div>
    <p>
      Tendrás a tu disposición un equipo multidisciplinario de profesionales en
      acústica, arquitectura e ingeniería de sonido para apoyar tus proyectos.
      Hemos trabajado de la mano en diferentes industrías y sectores (iglesias,
      universidades, fábricas, hoteles y centros comerciales).
    </p>
    <br />
    <p>¿No nos crees?</p>
    <a href="/portafolio">Mira nuestro portafolio</a>
  </section>
  <figure class="imagen serviceimg1">
    <img
      srcset="/images/about/equipo-320w.jpg 320w,
      /images/about/equipo-480w.jpg 480w,
    /images/about/equipo-800w.jpg 800w,
    /images/about/equipo-1080w.jpg
    "
      sizes="(max-width: 320px) 280px,
   (max-width: 1080px) 440px,
   (max-width: 1280px) 800px,
   1080px"
      src="/images/about/equipo-1080w.jpg"
      alt="equipo multidisciplinar"
    />
  </figure>

  <section class="content service2">
    <div class="titlecontainer">
      <Title mode="h2-blue" bold="Innovación" regular="y tecnología de punta" />
    </div>
    <p>
      En tu proyecto utilizaremos herramientas y software altamente
      especializado para obtener el mejor resultado acústico y sonoro.
      Garantizamos alta precisión en nuestras mediciones, diseños y procesos
      constructivos.
    </p>
  </section>
  <figure class="imagen serviceimg2">
    <img
      srcset="/images/about/depunta-320w.jpg 320w,
        /images/about/depunta-480w.jpg 480w,
      /images/about/depunta-800w.jpg 800w,
      /images/about/depunta-1080w.jpg
      "
      sizes="(max-width: 320px) 280px,
     (max-width: 1080px) 440px,
     (max-width: 1280px) 800px,
     1080px"
      src="/images/about/depunta-1080w.jpg"
      alt="tecnologia de punta para medición de ruido"
    />
  </figure>

  <section class="content service3">
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
  </section>
  <figure class="imagen serviceimg3">
    <img
      srcset="/images/about/ingeniero-320w.jpg 320w,
        /images/about/ingeniero-480w.jpg 480w,
      /images/about/ingeniero-800w.jpg 800w,
      /images/about/ingeniero-1080w.jpg
      "
      sizes="(max-width: 320px) 280px,
     (max-width: 1080px) 440px,
     (max-width: 1280px) 800px,
     1080px"
      src="/images/about/ingeniero-1080w.jpg"
      alt="Atencion en audio personalizada"
    />
  </figure>
  <section class="content service4">
    <div class="titlecontainer">
      <Title
        mode="h2-blue"
        bold="Materiales y diseños"
        regular="con mucho estilo"
      />
    </div>
    <p>
      Ademas de ser funcionales, usamos los mejores materiales en la elaboración
      de paneles acústicos, trampas de bajos, ventanería acústica para que tu
      espacio no solo se vea genial sino que se escuche con estilo.
    </p>
  </section>
  <figure class="imagen serviceimg4">
    <img
      srcset="/images/about/materiales-320w.jpg 320w,
        /images/about/materiales-480w.jpg 480w,
      /images/about/materiales-800w.jpg 800w,
      /images/about/materiales-1080w.jpg
      "
      sizes="(max-width: 320px) 280px,
     (max-width: 1080px) 440px,
     (max-width: 1280px) 800px,
     1080px"
      src="/images/about/materiales-1080w.jpg"
      alt="Diseños acústicos con materiales de alta calidad"
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
  a {
    text-decoration: none;
    font-weight: 700;
    color: var(--main-color);
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
