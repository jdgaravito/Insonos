<script>
  import Title from "../UI/Title.svelte";
  import PortfolioGrid from "../Portfolio/PortfolioGrid.svelte";
  import proyectos from "../../routes/portafolio/_projectsStore";
  import Button from "../UI/Button.svelte";
  
  let projects;

  proyectos.subscribe(p => {
    projects = p;

  })
  
</script>

<style>
  .heading {
    text-align: center;
    padding-top: 4.375rem;
    padding-bottom: 5.5rem;
  }
  .buttoncito {
    display: flex;
    justify-content: center;
    padding-top: 3.75rem;
  }
  .inner {
    margin-bottom: 3.125rem;
  }
</style>

<div class="inner">
  <div class="heading">
    <Title mode="h2-dark" bold="Nuestras" regular=" Soluciones" />
  </div>
  <section class="portfolioGrid">
    <PortfolioGrid projects={projects} />
  </section>
  <span class="buttoncito">
    <Button href="/portafolio" type="button">Portafolio de Proyectos</Button>
  </span>
</div>
