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
