<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`portafolio/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { project: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { goto } from "@sapper/app";
  import Title from "../../components/UI/Title.svelte";
  import Button from "../../components/UI/Button.svelte";
  import { projectId } from "./_projectsStore";
  import proyectos from "./_projectsStore";
  export let project;
  export let categ;

  /*manejod e la store. esta funcion guarda el Id en 
  la variable projectIndex, no confundir con la misma del store */
  
  let projectIndex;
  projectId.subscribe(p => {
    projectIndex = p; 
  });

  // presentacion de categorias dependiendo del category id;
  if (project.category == "aisla") {
    categ = "Aislamiento Acústico";
  } else if (project.category == "acond") {
    categ = "Acondicionamiento Acústico";
  } else {
    categ = "Sin categoría";
  }

// funcion para enviar el ID e ir a pagina de editar
  const navigateAndEdit = async () => {
    projectId.update(id => id = project.id);
    await goto("/portafolio/editar-proyecto");
    
  };
// funcion para eliminar el proyecto

  const deleteMode = async () => {
    proyectos.deleteProject(project.id);
    await goto("/portafolio");
  } 
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .wrapper {
    background: var(--main_gradient);
    margin-top: -18.75rem;
    padding-top: 18.75rem;
  }
  .heroimage {
    display: block;
    height: 34.375rem;
    width: 100%;
  }
  .heroimage {
    top: 0;
    left: 1;
    width: 100%;
    height: 100%;
    background-image: var(--image);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .titlecontainer {
    color: #ffffff;
    padding-top: 20rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: center;
  }
  .buttons-container {
    display: block;
    padding: 10rem;
  }
  .category {
    text-align: center;
  }
  .details {
    background: var(--light_gradient);
    display: flex;
    color: var(--main_color);
    justify-content: space-evenly;
    font-size: 18px;
    flex-wrap: wrap;
    padding: 20px;
  }
  .client > span,
  .city,
  .date {
    font-weight: 700;
  }
  .client,
  .city,
  .date {
    padding: 10px;
  }
  .main {
    background: #ffffff;
  }
  .titledesc {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    padding: 50px 0 50px 0;
  }
  .description {
    margin: 0 auto;
    font-weight: 300;
    opacity: 80%;
    padding-bottom: 130px;
    max-width: 900px;
    text-align: justify;
  }
  .description > p {
    padding: 20px;
  }
  .galery {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
  }
  .imgcontainer {
    margin: 0 auto;
  }
  .imgcontainer > img {
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  .specs {
    color: #ffffff;
    background-color: #3e2f90;
    opacity: 1;
    background-image: repeating-radial-gradient(
        circle at 0 0,
        transparent 0,
        #3e2f90 16px
      ),
      repeating-linear-gradient(#484b8355, #484b83);
  }
  .titlecont {
    max-width: 18.75rem;
    margin: 0 auto;
    text-align: center;
    padding: 12.5rem 1.25rem 12.5rem 1.25rem;
  }

  .features {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    padding-top: 3.125rem;
  }

  .feature > h3 {
    color: var(--main_color);
    font-size: 1.5rem;
    opacity: 80%;
  }

  .feature {
    padding: 0.625rem 1.875rem 0.625rem 1.875rem;
  }

  .feature > p {
    font-size: 0.9rem;
    opacity: 80%;
    font-weight: 300;
    padding-top: 0.625rem;
    text-align: justify;
  }

  @media all and (max-width: 1100px) {
    .galery {
      grid-template: 1fr / auto;
    }

    .titlecont {
      max-width: 18.75rem;
      text-align: center;
      margin: 0 auto;
      padding: 1.25rem;
    }
    .feat3 {
      padding-bottom: 6.25rem;
    }
  }
</style>

<svelte:head>
  <title>{project.name}</title>
</svelte:head>

<div class="wrapper">
  <section class="heroimage" style="--image: url({project.mainImage});">
    <div class="titlecontainer">
      <div class="title">
        <Title mode="h1-light" bold={project.name} regular="" />
        <p class="category">{categ}</p>
      </div>
    </div>
    <div class="buttons-container">
    </div>
  </section>
  <section class="details">
    <div class="client">
      <span>Cliente:</span>
      {project.client}
    </div>
    <div class="city">{project.city}, {project.country}</div>
    <div class="date">{project.date}</div>
  </section>
  <section class="main">
    <div class="titledesc inner">
      <Title mode="h2-dark" bold={project.tagline} regular="" />
    </div>
    <div class="description inner">
      <p>{project.description}</p>
    </div>
  </section>
  <section class="galery">
    <div class="imgcontainer">
      <img src={project.imgUrl1} alt="{project.title}1" />
    </div>
    <div class="imgcontainer">
      <img src={project.imgUrl2} alt="{project.title}2" />
    </div>
    <div class="imgcontainer">
      <img src={project.imgUrl3} alt="{project.title}3" />
    </div>
    <div class="imgcontainer">
      <img src={project.imgUrl4} alt="{project.title}4" />
    </div>
    <div class="specs">
      <div class="titlecont">
        <Title mode="h2-light" bold="Especificaciones" regular="" />
      </div>
    </div>
    <div class="features">
      <div class="feature feat1">
        <h3>{project.attribute1Name}</h3>
        <p>{project.attribute1}</p>
      </div>
      <div class="feature feat2">
        <h3>{project.attribute2Name}</h3>
        <p>{project.attribute2}</p>
      </div>
      <div class="feature feat3">
        <h3>{project.attribute3Name}</h3>
        <p>{project.attribute3}</p>
      </div>
    </div>

  </section>
</div>

<!-- <div class="content" /> -->
