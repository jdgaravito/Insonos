<script>
  import HeroHeader from "../components/UI/HeroHeader.svelte";
  import ServiceGrid from '../components/Servicios/ServiceGrid.svelte';

  let bold = "Nuestros";
  let regular = "Servicios";
  let tagline =
    "Nuestra meta es crear las atmósferas sonoras más increibles para tus proyectos arquitectónicos. Ofrecemos diversos servicios para ajustarnos a las necesidades de tus proyectos";
</script>

<svelte:head>
  <title>Nuestros Servicios</title>
</svelte:head>
<HeroHeader {bold} {regular} {tagline} />
<div class="wrapper">
  <ServiceGrid />
</div>
