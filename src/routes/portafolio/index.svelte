
<script>
  import HeroHeader from "../../components/UI/HeroHeader.svelte";
  import PortfolioMainGrid from "../../components/Portfolio/PortfolioMainGrid.svelte";
  import proyectos from './_projectsStore';
  let bold = "Portafolio";
  let regular = "de Proyectos";
  let tagline = "Conóce algunos de nuestros trabajos realizados.";

</script>

<style>

</style>

<svelte:head>
  <title>Portafolio de Proyectos</title>
</svelte:head>
<HeroHeader {bold} {regular} {tagline} />
<PortfolioMainGrid projects={$proyectos} />

