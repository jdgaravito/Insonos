<script>
  import FaHeadphones from 'svelte-icons/fa/FaHeadphones.svelte';
  export let mode = null;
  export let type = "button";
  export let href = null;
  export let disabled = false;
</script>

<style>
  button,
  a {
    font: inherit;
    border: 1px solid var(--main_gradient);
    background: var(--main_gradient);
    font-size: 1.125rem;
    font-weight: 500;
    padding: 1.1875rem 1.875rem;
    color: white;
    border-radius: 5px;
    box-shadow: 0px 20px 40px rgba(13, 18, 39, 0.3);
    cursor: pointer;
    text-decoration: none;
    margin-right: 13px;
  }

  button:focus {
    outline: none;
  }

  button:hover,
  button:active,
  a:hover,
  a:active {
    background: var(--main_color);
    box-shadow: 0px 20px 40px rgba(13, 18, 39, 0.3);
    transform: translateY(-3px);
    transition: transform 0.2s ease-in-out; 
  }
  button:active,
  a:active {
    transform: translateY(2px);
  }
  button:disabled,
  button:disabled:hover,
  button:disabled:active {
    background: #ccc;
    border-color: #ccc;
    color: #959595;
    box-shadow: none;
    cursor: not-allowed;
  }

  .success {
    background: #01a129;
    border-color: #01a129;
  }

  .success:hover,
  .success:active {
    background: #1ac745;
    border-color: #1ac745;
  }

  .outline {
    background: transparent;
    color: #ffffff;
    border-color: #ffffff;
    border-style: solid;
    border-width: 1px;
  }

  .outline:hover,
  .outline:active {
    background: #ffffff;
    color: var(--main_color);
  }

  .outline:disabled,
  .outline:disabled:hover,
  .outline:disabled:active {
    background: transparent;
    color: #ccc;
  }

  .outline.success {
    border-color: #01a129;
    color: #01a129;
  }

  .outline.success:hover,
  .outline.success:active {
    background: #c2ffd1;
  }

  .special {
    background: var(--purple_gradient);
  }
  .special:hover,
  .special:active {
    background: #9733ee;
  }

  .light{
    background: var(--light_gradient);
    color: var(--main_color);
  }
  .light:hover, 
  .light:active {
    background: #ffffff;
    color: var(--main_color);

  }
  .icon {
    width: 20px;
    height: 30px;
    color:#ffffff;
  }

  @media all and (max-width: 600px) {
    button,
  a {
    font-size: 1rem;
    padding: 1rem 1rem;
  }
  }
</style>

{#if href}
    <a {href} class={mode} on:click {disabled}><slot/></a>
{:else}
  <button {type} class={mode} on:click {disabled}><slot/></button>
{/if}
