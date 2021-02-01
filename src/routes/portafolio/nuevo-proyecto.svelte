<script>
  import HeroHeader from "../../components/UI/HeroHeader.svelte";
  import { goto } from "@sapper/app";
  import EditProyectForm from "../../components/Portfolio/EditProyectForm.svelte";
  import proyectos from "./_projectsStore";

  const cancelEdit = async (event) => {
    await goto("/portafolio/");
  }

  let id;
  let slug;
  const savedProject = async (event) =>{
    slug = event.detail;
    console.log(slug);
    
    await goto("/portafolio/"+ slug);
  
  } 
  
</script>

<div class="wrapper">
  <HeroHeader bold="Nuevo " regular="Proyecto " tagline="" />
  <EditProyectForm on:save={savedProject} {id} on:cancel={cancelEdit} />
</div>


