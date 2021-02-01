<script context="module">

</script>

<script>
  import { createEventDispatcher } from "svelte";
  import proyectos from "../../routes/portafolio/_projectsStore";
  import FileUpload from "../UI/FileUpload.svelte";
  import SelectDate from "../UI/SelectDate.svelte";
  import TextInput from "../../components/UI/TextInput.svelte";
  import Button from "../../components/UI/Button.svelte";
  import PortfolioMainGrid from "../../components/Portfolio/PortfolioMainGrid.svelte";
  import Title from "../../components/UI/Title.svelte";
  import Select from "svelte-select";
  import { slugify } from "../../helpers/slugify.js";
  import { isEmpty } from "../../helpers/validation.js";
  const dispatch = createEventDispatcher();

  // seccion editar proyectos:
  export let id = null;

  //form variables
  let name = "";
  let category = "";
  let client = "";
  let city = "";
  let country = "";
  let tagline = "";
  let description = "";
  let imgUrl1 = "";
  let imgUrl2 = "";
  let imgUrl3 = "";
  let imgUrl4 = "";
  let attribute1Name = "";
  let attribute1 = "";
  let attribute2Name = "";
  let attribute2 = "";
  let attribute3Name = "";
  let attribute3 = "";
  let slug = "";

  if (id) {
    const unsubscribe = proyectos.subscribe(items => {
      const selectedProject = items.find(i => i.id === id);
      name = selectedProject.name;
      category = selectedProject.category;
      client = selectedProject.client;
      city = selectedProject.city;
      country = selectedProject.country;
      tagline = selectedProject.tagline;
      description = selectedProject.description;
      imgUrl1 = selectedProject.imgUrl1;
      imgUrl2 = selectedProject.imgUrl2;
      imgUrl3 = selectedProject.imgUrl3;
      imgUrl4 = selectedProject.imgUrl4;
      attribute1Name = selectedProject.attribute1Name;
      attribute2Name = selectedProject.attribute2Name;
      attribute3Name = selectedProject.attribute3Name;
      attribute1 = selectedProject.attribute1;
      attribute2 = selectedProject.attribute2;
      attribute3 = selectedProject.attribute3;
      slug = selectedProject.slug;
    });
    unsubscribe();
  }

  //Validation variables and reactive validation for each input type. estas variables las puede crear svelte al usar el label statement.
  let nameValid = false;
  let clientValid = false;
  let cityValid = false;
  let countryValid = false;
  let taglineValid = false;
  let descriptionValid = false;
  let attribute1NameValid = false;
  let attribute2NameValid = false;
  let attribute3NameValid = false;
  let attribute1Valid = false;
  let attribute2Valid = false;
  let attribute3Valid = false;

  let formIsValid = false;

  //calendar variables
  let formattedSelected;
  let projectDate;

  // select variables
  let categories = [
    { value: "acond", label: "Acondicionamiento Acústico" },
    { value: "aisla", label: "Aislamiento Acústico" },
    { value: "consult", label: "Consultoría y Diseño" },
    { value: "audio", label: "Audio Profesional" }
  ];

  let selectedValue = undefined;

  $: nameValid = !isEmpty(name);
  $: clientValid = !isEmpty(client);
  $: cityValid = !isEmpty(city);
  $: countryValid = !isEmpty(country);
  $: taglineValid = !isEmpty(tagline);
  $: attribute1NameValid = !isEmpty(attribute1Name);
  $: attribute2NameValid = !isEmpty(attribute2Name);
  $: attribute3NameValid = !isEmpty(attribute3Name);
  $: attribute1Valid = !isEmpty(attribute1);
  $: attribute2Valid = !isEmpty(attribute2);
  $: attribute3Valid = !isEmpty(attribute3);
  $: descriptionValid = !isEmpty(description);
  $: formIsValid =
    nameValid &&
    clientValid &&
    cityValid &&
    countryValid &&
    taglineValid &&
    attribute1NameValid &&
    attribute2NameValid &&
    attribute3NameValid &&
    descriptionValid;

  // event distpatcher that sends the form variables to editar-projecto and nuevo-projecto
  function submitForm() {
    const projectData = {
      name: name,
      slug: slugify(name),
      category: selectedValue,
      client: client,
      city: city,
      country: country,
      date: projectDate,
      tagline: tagline,
      description: description,
      imgUrl1: imgUrl1,
      imgUrl2: imgUrl2,
      imgUrl3: imgUrl3,
      imgUrl4: imgUrl4,
      attribute1Name: attribute1Name,
      attribute2Name: attribute2Name,
      attribute3Name: attribute3Name,
      attribute1: attribute1,
      attribute2: attribute2,
      attribute3: attribute1
    };
    // add the newproject to the projects array
    // projects = [newProject, ...projects];  ya no, solo se requiere mandarlos a la store
    let newUrl = projectData.slug;

    if (id) {
      proyectos.updateProject(id, projectData);
    } else {
      fetch("https://leq-ingenieria.firebaseio.com/proyectos.json", {
        method: "POST",
        body: JSON.stringify(projectData),
        headers: { "Content-type": "application/json" }
      })
        .then(res => {
          if (!res.ok) {
            throw new Error(
              "Error al enviar datos, por favor intente de nuevo"
            );
          }
          return res.json();
        })
        .then(data => {
          proyectos.addProject({
            ...projectData,
            id: data.name
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
    dispatch("save", newUrl);
  }
</script>

<style>
  .formcontainer {
    padding-top: 20px;
    padding-bottom: 20px;
    max-width: 80%;
    margin: 0 auto;
  }

  .projectInfo {
    padding-top: 1rem;
  }
  .clientInfo {
    background: #ffffff;
    margin-top: 1rem;
  }
  .place {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .half {
    width: 45%;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    width: 100%;
    font-weight: bold;
  }
  .helperText {
    font-weight: 300;
    opacity: 80%;
    margin: 0.5rem 0 0.5rem 0;
  }
  .formControl {
    padding: 0.5rem 0 0.5rem 0;
    width: 100%;
    margin: 0.25rem 0;
  }
  .projectDate {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 50%;
  }

  .themed {
    --borderFocusColor: var(--main_color);
    --multiItemActiveBG: var(--main_color);
  }
  .attributeIntro {
    padding-top: 30px;
  }
  .atributes {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 10px;
    width: 100%;
  }
  .attribute {
    margin-right: 2.5%;
  }
  .buttons {
    margin-top: 20px;
    display: flex;
  }

  @media all and (max-width: 800px) {
    .half {
      width: 44.5%;
    }
  }
</style>

<div class="inner">

  <div class="formcontainer">
    <form on:submit|preventDefault={submitForm}>
      <Title mode="h2-dark" bold="Información" regular=" del Proyecto" />
      <section class="projectInfo">

        <TextInput
          id="name"
          label="Nombre del Proyecto"
          value={name}
          valid={nameValid}
          validityMessage="Por favor escriba un nombre para el proyecto válido"
          on:input={event => (name = event.target.value)} />

        <TextInput
          id="tagline"
          helptext="Un slogan atractivo para vender el proyecto"
          label="Tagline"
          placeholder="ej: Un espacio que vibra con estilo"
          valid={taglineValid}
          validityMessage="Por favor escriba un tagline válido"
          value={tagline}
          on:input={event => (tagline = event.target.value)} />

        <TextInput
          controlType="textarea"
          id="description"
          label="Descripción del Proyecto"
          validityMessage="Por favor escriba una descripción válida"
          valid={descriptionValid}
          helptext="En 250 carácteres describa el proyecto"
          value={description}
          on:input={event => (description = event.target.value)} />

        <div class="formControl">
          <label for="projectDate">Fecha del Proyecto:</label>
          <div class="projectDate">
            <SelectDate bind:formattedSelected={projectDate} />
          </div>
        </div>
        <div class="formControl">
          <label for="projectCategory">Categoría del Proyecto</label>
          <p class="helperText">
            Selecciona una o varias categorías para el proyecto
          </p>
          <div class="category themed">
            <Select
              items={categories}
              isMulti={true}
              isCreatable={true}
              placeholder="Seleccione..."
              noOptionsMessage="Sin Resultados"
              bind:selectedValue />
          </div>
          <div class="attributeIntro">
            <p>
              A continuación ingrese algunos atributos que pueden variar para
              cada proyecto. Estos atributos saldrán en la sección de
              especificaciones del proyecto.
            </p>

          </div>
          <div class="atributes">
            <div class=" attribute half">
              <TextInput
                id="client"
                label="Atributo 1"
                helptext="Nombre del atributo"
                placeholder="ej. Técnicas usadas"
                valid={attribute1NameValid}
                validityMessage="Por favor escriba un nombre de atributo válido"
                value={attribute1Name}
                on:input={event => (attribute1Name = event.target.value)} />
            </div>
            <div class="attribute half">
              <TextInput
                controlType="textarea"
                id="attribute1"
                label="Contenido"
                validityMessage="Por favor escriba una descripción válida"
                valid={attribute1Valid}
                helptext="Contenido del atributo 1"
                value={attribute1}
                on:input={event => (attribute1 = event.target.value)} />
            </div>
          </div>
          <div class="atributes">
            <div class=" attribute half">
              <TextInput
                id="client"
                label="Atributo 2"
                helptext="Nombre del atributo"
                placeholder="ej. Elementos Usados"
                valid={attribute2NameValid}
                validityMessage="Por favor escriba un nombre de atributo válido"
                value={attribute2Name}
                on:input={event => (attribute2Name = event.target.value)} />
            </div>
            <div class="attribute half">
              <TextInput
                controlType="textarea"
                id="attribute1"
                label="Contenido"
                validityMessage="Por favor escriba una descripción válida"
                valid={attribute2Valid}
                helptext="Contenido del atributo 2"
                value={attribute2}
                on:input={event => (attribute2 = event.target.value)} />
            </div>
          </div>
          <div class="atributes">
            <div class=" attribute half">
              <TextInput
                id="client"
                label="Atributo 3"
                helptext="Nombre del atributo"
                placeholder="ej. Tiempo de ejecución"
                valid={attribute3NameValid}
                validityMessage="Por favor escriba un nombre de atributo válido"
                value={attribute3Name}
                on:input={event => (attribute3Name = event.target.value)} />
            </div>
            <div class="attribute half">
              <TextInput
                controlType="textarea"
                id="attribute3"
                label="Contenido"
                validityMessage="Por favor escriba una descripción válida"
                valid={attribute3Valid}
                helptext="Contenido del atributo 3"
                value={attribute3}
                on:input={event => (attribute3 = event.target.value)} />
            </div>
          </div>
        </div>
      </section>
      <section class="images">
        <Title mode="h2-dark" bold="Imágenes" regular=" del Proyecto" />
        <FileUpload label="Imagen principal" id="imgUrl1" files={imgUrl1} on:input={event => (imgUrl1 = event.target.files)}/>
      </section>
      <section class="clientInfo">
        <Title mode="h2-dark" bold="Información" regular=" del Cliente" />
        <TextInput
          id="client"
          label="Cliente"
          helptext="¿Quien es el cliente de este proyecto?"
          placeholder=""
          valid={clientValid}
          validityMessage="Por favor escriba un nombre de cliente válido"
          value={client}
          on:input={event => (client = event.target.value)} />

        <div class="place">
          <div class="city half">
            <TextInput
              id="city"
              label="Ciudad"
              placeholder=""
              valid={cityValid}
              validityMessage="Por favor escriba un nombre de cliente válido"
              value={city}
              on:input={event => (city = event.target.value)} />
          </div>
          <div class="country half">
            <TextInput
              type="text"
              id="country"
              label="País"
              valid={countryValid}
              validityMessage="Por favor escriba país válido"
              placeholder=""
              value={country}
              on:input={event => (country = event.target.value)} />
          </div>
        </div>
      </section>
      <div class="buttons">
        <Button type="submit" mode="special" disabled={!formIsValid}>
          Guardar
        </Button>
        <Button
          href="/portafolio"
          mode="light"
          on:click={() => dispatch('cancel')}>
          Cancelar
        </Button>
      </div>
    </form>

  </div>

</div>
