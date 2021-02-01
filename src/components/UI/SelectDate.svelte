<script>
  import Datepicker from "svelte-calendar";
  export let daysOfWeek = [
    ["Domingo", "Dom"],
    ["Lunes", "Lun"],
    ["Martes", "Mar"],
    ["Miércoles", "Mié"],
    ["Jueves", "Jue"],
    ["Viernes", "Vie"],
    ["Sábado", "Sáb"]
  ];
  export let monthsOfYear = [
    ["Enero", "Ene"],
    ["Febrero", "Feb"],
    ["Marzo", "Mar"],
    ["Abril", "Abr"],
    ["Mayo", "May"],
    ["Junio", "Jun"],
    ["Julio", "Jul"],
    ["Agosto", "Ago"],
    ["Septiembre", "Sep"],
    ["Octubre", "Oct"],
    ["Noviembre", "Nov"],
    ["Diciembre", "Dic"]
  ];

  export let buttonName = "Seleccione la Fecha";
  export let formattedSelected = "";
  let dateChosen;
  let format = "#{j} de #{F} de #{Y}";
</script>

<style>
  .custom-button {
    font: inherit;
    border: 1px solid var(--main_gradient);
    background: var(--light_gradient);
    font-size: 1rem;
    font-weight: 500;
    padding: 1.1875rem 1.875rem;
    color: var(--main_gradient);
    border-radius: 30px;
    box-shadow: 0px 20px 40px rgba(13, 18, 39, 0.3);
    cursor: pointer;
    text-decoration: none;
    transform: translateY(0);
  }

  .custom-button:hover {
    background: #ece9e6;
    box-shadow: 0px 20px 40px rgba(13, 18, 39, 0.3);
    transform: translateY(-3px);
    transition: transform 0.2s ease-in-out;
  }
</style>

<Datepicker
  {format}
  bind:formattedSelected
  bind:dateChosen
  buttonBackgroundColor="#e20074"
  buttonTextColor="white"
  highlightColor="var(--main_color)"
  dayBackgroundColor="#efefef"
  dayTextColor="#333"
  dayHighlightedBackgroundColor="var(--main_color)"
  dayHighlightedTextColor="#fff"
  {daysOfWeek}
  {monthsOfYear}>
  <button class="custom-button" on:click|preventDefault>
    {#if dateChosen}Fecha: {formattedSelected}{:else}{buttonName}{/if}
  </button>
</Datepicker>
