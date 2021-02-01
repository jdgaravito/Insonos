<script>
  export let files;
  export let id;
  export let label;
 
</script>

<style>
  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .fileholder {
    padding: 30px 20px 30px 20px;
  }
  label {
    display: inline-block;
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

  label:focus {
    outline: none;
  }
  
  label:hover,
  label:active {
    background: #ece9e6;
    box-shadow: 0px 20px 40px rgba(13, 18, 39, 0.3);
    transform: translateY(-3px);
    transition: transform 0.2s ease-in-out;
  }
</style>

<div class="fileholder">
  <label for={id}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg>
    {#if files && files[0]}
      {files[0].name}
    {:else}{label}{/if}
  </label>
  <input type="file" name="file" {id} class="inputfile" bind:files />
</div>
