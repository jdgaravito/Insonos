<script>
  import Carousel from "@beyonk/svelte-carousel";

  let logos = [
    {
      client: "Banco de Occidente",
      imageUrl: "/images/logos/bancooccidente.png"
    },
    {
      client: "Platzi",
      imageUrl: "/images/logos/platzirris.png"
    },
    {
      client: "Sayco",
      imageUrl: "/images/logos/sayco.png"
    },
    {
      client: "Universidad Nacional",
      imageUrl: "/images/logos/logo-universidad.png"
    },
    {
      client: "Warner",
      imageUrl: "/images/logos/warner.png"
    },
    {
      client: "Grupo EPM",
      imageUrl: "/images/logos/empbw.png"
    }
  ];
</script>

<style>
  .slide-content {
    padding-bottom: 1.25rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  .wrapper {
    background: var(--main_color);
  }
 .logos {
   padding-top: 30px;
   padding-bottom: 20px;
 }
  @media screen and (min-width: 600x) and (max-width: 900px) {
    .logo-images {
      height: 40px;
    }
  }
  @media only screen and (max-width: 600px) {
    .logo-images {
      height: 40px;
    }
  }
</style>

<div class="wrapper">
  <div class="inner logos">
    <Carousel
      perPage={{ 1200: 6, 800: 4, 300: 3 }}
      autoplay="5000">
      {#each logos as logo}
        <div class="slide-content">
          <img class="logo-images" src={logo.imageUrl} alt={logo.client} />
        </div>
      {/each}
    </Carousel>
  </div>
</div>
