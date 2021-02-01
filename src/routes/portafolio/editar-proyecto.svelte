<script>
  import HeroHeader from "../../components/UI/HeroHeader.svelte";
  import { goto } from "@sapper/app";
  import EditProyectForm from "../../components/Portfolio/EditProyectForm.svelte";
  import PortfolioMainGrid from "../../components/Portfolio/PortfolioMainGrid.svelte";
  import proyectos, { projectId } from "./_projectsStore";

  // import proyectos from "./_projectsStore";

  /*manejod e la store. esta funcion guarda el Id en 
  la variable projectIndex, no confundir con la misma del store */

  let projectIndex;
  let id;
  let slug;

  projectId.subscribe(p => {
    projectIndex = p;
  });

   id = projectIndex;

  function cancelEdit(event) {
    projectId.update(i => {
      i = null;
    });
  }

  const savedProject = async (event) => {
    projectId.update(i => {
      i = null;
    });

    slug = event.detail;
    console.log(slug);
    
    await goto("/portafolio/"+ slug);
   
  }
</script>

<div class="wrapper">
  <HeroHeader bold="Editar " regular="Proyecto " tagline="" />
  <EditProyectForm on:save={savedProject} {id} on:cancel={cancelEdit} />
</div>

<div class="grid">
  <PortfolioMainGrid projects={$proyectos} />
</div>
