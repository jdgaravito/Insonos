<script>
  import PortfolioItem from "./PortfolioItem.svelte";
  import CategoryCard from "./CategoryCard.svelte";
  import PortfolioThumb from "./PortfolioThumb.svelte";
  import FaWater from "svelte-icons/fa/FaWater.svelte";
  import GiSoundWaves from "svelte-icons/gi/GiSoundWaves.svelte";
  import GiUltrasound from "svelte-icons/gi/GiUltrasound.svelte";
  import GiAudioCassette from "svelte-icons/gi/GiAudioCassette.svelte";
  import GiSoundOff from "svelte-icons/gi/GiSoundOff.svelte";

  export let projects;

  //filter the projects array depending the category
  const acond = projects.filter(project => project.category === "acond");
  const aisla = projects.filter(project => project.category === "aisla");
  const consult = projects.filter(project => project.category === "consult");
  const audio = projects.filter(project => project.category === "audio");

  let category = "acond";

  function changeCategory(categ) {
    if (categ == "acond") {
      category = acond;
    } else if (categ == "aisla") {
      category = aisla;
    } else if (categ == "consult") {
      category = consult;
    } else if (categ == "audio") {
      category = audio;
    }
  }

  // gives the last 4 elements on filtered array.
  let projs = projects.slice(Math.max(projects.length - 4, 0));

  // last element for the main picture
  let last = projs.slice(-1);
  // get the other 3 remaining projects for thumbnails.
  let thumbProjs = projs.slice(0, 3);
</script>

<style>
  .projectsGrid {
    display: grid;
    list-style-type: none;
  }
  @media all and (min-width: 1081px) {
    .projectsGrid {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-gap: 1.25rem;
      padding: 1.25rem;
    }
    .card1 {
      grid-column: 1;
    }
    .card2 {
      grid-column: 1;
    }
    .card3 {
      grid-column: 1;
    }
    .card4 {
      grid-column: 1;
    }
    .projects {
      grid-column: 2;
      grid-row: 1 / -1;
    }
    .various {
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
    }
  }
  @media all and (min-width: 501px) and (max-width: 1080px) {
    .projectsGrid {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-gap: 1.25rem;
      padding: 1.25rem;
    }
    .various {
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
    }
    .card1 {
      grid-column-start: 1;
      grid-row-start: 1;
    }
    .card2 {
      grid-column-start: 2;
      grid-row-start: 1;
    }

    .card3 {
      grid-column-start: 1;
      grid-row-start: 2;
    }
    .card4 {
      grid-column-start: 2;
      grid-row-start: 2;
    }
    .projects {
      grid-column: 1 / -1;
      grid-row-start: 3;
      padding-bottom: 10px;
    }
  }

  @media all and (max-width: 500px) {
    .projectsGrid {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }

    .various {
      padding-top: 20px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>

<div class="projectsGrid">
  <div class="card1">
    <CategoryCard>
      <span slot="icon">
        <GiSoundWaves />
      </span>
      <span slot="title">
        <h3>Consultoría en Diseño Sonoro</h3>
      </span>
      <span slot="description">
        Asesoría, planeación, gestión y desarrollo de proyectos relacionados con
        acústica, audio profesional e integración AV
      </span>
    </CategoryCard>
  </div>

  <div class="card2">
    <CategoryCard>
      <span slot="icon">
        <GiUltrasound />
      </span>
      <span slot="title">Acondicionamiento Acústico</span>
      <span slot="description">
        Sistemas constructivos y materiales especializados para proveer confort
        y comodidad sonora en cualquier espacio.
      </span>
    </CategoryCard>
  </div>

  <div class="card3">
    <CategoryCard>
      <span slot="icon">
        <GiSoundOff />
      </span>
      <span slot="title">Insonorización y control</span>
      <span slot="description">
        Control de ruido especializado para aplicaciones corporativas e
        industriales. Proveemos tranquilidad y seguridad.
      </span>
    </CategoryCard>
  </div>

  <div class="card4">
    <CategoryCard>
      <span slot="icon">
        <GiAudioCassette />
      </span>
      <span slot="title">
        Audio Profesional
        <br />
      </span>
      <span slot="description">
        Soluciones tecnológicas avanzadas para múltiples aplicaciones /
        Instalaciones e implementación de equipos de sonido profesional.
      </span>
    </CategoryCard>
  </div>

  <div class="projects">
    {#each last as project, i}
      <a rel="prefetch" href="portafolio/{project.slug}">
        <PortfolioItem
          name={project.name}
          client={project.client}
          mainImage={project.mainImage} />
      </a>
    {/each}
    <div class="various">
      {#each thumbProjs as project, i}
        <a rel="prefetch" href="portafolio/{project.slug}">
          <PortfolioThumb mainImage={project.mainImage} name={project.name} />
        </a>
      {/each}
    </div>
  </div>

</div>
