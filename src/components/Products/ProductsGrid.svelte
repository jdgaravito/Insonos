<script>
  import Title from "../UI/Title.svelte";
</script>

<div class="wrapper">
  <section class="content service1">
    <div class="titlecontainer">
      <Title mode="h2-blue" bold="Espumas " regular="fonoabsorbentes" />
    </div>
    <p>
      La fórma más económica y accesible de reducir la reverberación gracias a
      sus materiales de poliuretano de alta absorción. Fáciles de instalar y en
      diversas formas y colores. Ideales para oficinas, estudios de grabación,
      iglesias, restaurantes y aplicaciones comerciales.
    </p>
  </section>
  <figure class="imagen serviceimg1">
    <img
      srcset="/images/products/espumas-320w.jpg 320w,
        /images/products/espumas-480w.jpg 480w,
      /images/products/espumas-800w.jpg 800w,
      /images/products/espumas-1080w.jpg
      "
      sizes="(max-width: 320px) 280px,
     (max-width: 1080px) 440px,
     (max-width: 1280px) 800px,
     1080px"
      src="/images/products/espumas-1080w.jpg"
      alt="Espumas fonoabsorbentes de poliuretano"
    />
  </figure>

  <section class="content service2">
    <div class="titlecontainer">
      <Title mode="h2-blue" bold="Ventanas" regular="y puertas acústicas" />
    </div>
    <p>
      Utilizamos diferentes innovaciones acusticas y tecnologías de reducción de
      ruido. Insonos ha creado para tus proyectos, ventanería y puertas
      acústicas durables e instalables. Un rango amplio de aplicaciones como
      estudios de grabación y vitrinas comerciales. Alta reducción del ruido
      exterior.
    </p>
  </section>
  <figure class="imagen serviceimg2">
    <img
      srcset="/images/products/ventana-320w.jpg 320w,
          /images/products/ventana-480w.jpg 480w,
        /images/products/ventana-800w.jpg 800w,
        /images/products/ventana-1080w.jpg
        "
      sizes="(max-width: 320px) 280px,
       (max-width: 1080px) 440px,
       (max-width: 1280px) 800px,
       1080px"
      src="/images/products/ventana-1080w.jpg"
      alt="Ventanas y puertas acústicas"
    />
  </figure>

  <section class="content service3">
    <div class="titlecontainer">
      <Title mode="h2-blue" bold="Paneles " regular="Acústicos" />
    </div>
    <p>
      Creamos para ti paneles acústicos durables, fonoabsorbentes y muy
      estéticos pensados para ser usados como recubrimiento acústico de techos y
      muros en teatros, estudios y salas de conferencias. Contamos con varios
      acabados en madera (MDF) y textiles(Paños).
    </p>
  </section>
  <figure class="imagen serviceimg3">
    <img
      srcset="/images/products/paneles-320w.jpg 320w,
          /imagesproductst/paneles-480w.jpg 480w,
        /images/products/paneles-800w.jpg 800w,
        /images/products/paneles-1080w.jpg
        "
      sizes="(max-width: 320px) 280px,
       (max-width: 1080px) 440px,
       (max-width: 1280px) 800px,
       1080px"
      src="/images/products/paneles-1080w.jpg"
      alt="Paneles acústicos"
    />
  </figure>
  <section class="content service4">
    <div class="titlecontainer">
      <Title mode="h2-blue" bold="Trampas para" regular="bajos" />
    </div>
    <p>
      Evita las reflexiones de los bajos en las esquinas de tus habitaciones.
      Ideal para estudios de grabación y teatros. Los fabricamos en diversidad
      de materiales, y recubrimientos de madera o espuma de alta densidad.
    </p>
  </section>
  <figure class="imagen serviceimg4">
    <img
      srcset="/images/products/trampas-320w.jpg 320w,
          /images/products/trampas-480w.jpg 480w,
        /images/products/trampas-800w.jpg 800w,
        /images/products/trampas-1080w.jpg
        "
      sizes="(max-width: 320px) 280px,
       (max-width: 1080px) 440px,
       (max-width: 1280px) 800px,
       1080px"
      src="/images/products/trampas-1080w.jpg"
      alt="Trampas para bajos"
    />
  </figure>
  <section class="content service5">
    <div class="titlecontainer">
      <Title mode="h2-blue" bold="Cielo rasos" regular="acústicos" />
    </div>
    <p>
      Paneles de techo fonoabsorbentes, ofrecen un alto nivel de absorción,
      para frecuencias bajas y medias. Utiles en una amplia gama de aplicaciónes como teatros, bibliotecas, estudios de grabación.
      Elaborados en láminas cuadradas, circulares o lineales de madera o textiles. Tenemos encuenta un diseño de
      la iluminación para crear la atmosfera perfecta.
    </p>
  </section>
  <figure class="imagen serviceimg5">
    <img
      srcset="/images/products/cieloraso-320w.jpg 320w,
          /images/products/cieloraso-480w.jpg 480w,
        /images/products/cieloraso-800w.jpg 800w,
        /images/products/cieloraso-1080w.jpg
        "
      sizes="(max-width: 320px) 280px,
       (max-width: 1080px) 440px,
       (max-width: 1280px) 800px,
       1080px"
      src="/images/products/cieloraso-1080w.jpg"
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
    .service5 {
      grid-column: 1/ 2;
      grid-row: 5 / 6;
    }
    .serviceimg5 {
      grid-column: 2/ 3;
      grid-row: 5 / 6;
    }
  }
</style>
