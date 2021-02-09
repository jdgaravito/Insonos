<script>
  import PortfolioItem from "./PortfolioItem.svelte";
  export let projects;
</script>

<style>
  .grid-gallery {
    display: grid;
    padding: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    grid-auto-flow: row dense;
  }

  @media all and (max-width: 1080px) {
    .grid-gallery{
      grid-template-columns: 1fr 1fr;
    }
  }
  @media all and (max-width: 600px) {
    .grid-gallery{
      grid-template-columns: 1fr;
    }
  }

</style>

<div class="wrapper">
  <div class="inner">
    <section class="grid-gallery">
      {#each projects as project, i}
        <a rel="prefetch" href="portafolio/{project.slug}">
          <div class="projects">
            <PortfolioItem
              name={project.name}
              client={project.client}
              mainImage={project.mainImage} />
          </div>
        </a>
      {/each}
    </section>
  </div>

</div>
