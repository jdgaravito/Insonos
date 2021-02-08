<script>
  import Title from "../UI/Title.svelte";
  import PortfolioGrid from "../Portfolio/PortfolioGrid.svelte";
  import proyectos from "../../routes/portafolio/_projectsStore";
  import Button from "../UI/Button.svelte";

  let projects;

  proyectos.subscribe((p) => {
    projects = p;
  });
</script>

<div class="wrapper">
  <div class="inner">
    <div class="heading">
      <Title mode="h2-blue" bold="Nuestras" regular=" Soluciones" />
    </div>
    <section class="portfolioGrid">
      <PortfolioGrid {projects} />
    </section>
    <span class="buttoncito">
      <Button href="/portafolio" type="button">Portafolio de Proyectos</Button>
    </span>
  </div>
</div>

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
  .wrapper {
    background-color: #ffffff;
    background-image: radial-gradient(#b8bcff 1px, #ffffff 1px);
    background-size: 20px 20px;
  }
  .inner {
    margin-bottom: 3.125rem;
  }
</style>
