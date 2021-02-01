<script>
  import HeroHeader from "../components/UI/HeroHeader.svelte";
  import ServiceGrid from '../components/Servicios/ServiceGrid.svelte';

  let bold = "Nuestros";
  let regular = "Servicios";
  let tagline =
    "Lograr un ambiente sonoro adecuado y cómodo para la audiencia es el objetivo de todo tratamiento acústico. Ofrecemos varios servicios para lograrlo";
</script>

<svelte:head>
  <title>Nuestros Servicios</title>
</svelte:head>
<HeroHeader {bold} {regular} {tagline} />
<ServiceGrid />
