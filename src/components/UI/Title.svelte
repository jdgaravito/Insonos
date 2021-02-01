<script>
  export let mode;
  export let regular = "";
  export let bold = "";
</script>

<style>
  h1 {
    font-size: calc(30px + 6 * ((100vw - 320px) / 680));
    font-weight: 300;
  }

  h2 {
    font-size: calc(25px + 6 * ((100vw - 320px) / 680));
    font-weight: 300;
  }
  span {
    font-weight: bold;
  }
  .h1-light {
    color: #ffffff;
  }

  .h1-light > span {
    opacity: 100%;
  }
  .h1-dark {
    color: #939fa4;
  }
  .h1-dark > span {
    color: var(--dark_color);
  }
  .h1-blue {
    color: var(--main_color);
  }
  .h1-blue > span {
    color: var(--main_color);
  }

  .h2-light {
    color: #ffffff;
  }

  .h2-light > span {
    opacity: 100%;
  }
  .h2-dark {
    color: #939fa4;
  }
  .h2-dark > span {
    color: var(--dark_color);
  }
  .h2-blue {
    color: var(--main_color);
  }
  .h2-blue > span {
    color: var(--main_color);
  }
</style>

{#if mode === 'h1-light'}
  <h1 class={mode}>
    <span>{bold}</span>
    {regular}
  </h1>
{:else if mode === 'h1-dark'}
  <h1 class={mode}>
    <span>{bold}</span>
    {regular}
  </h1>
{:else if mode === 'h1-blue'}
  <h1 class={mode}>
    <span>{bold}</span>
    {regular}
  </h1>
{:else if mode === 'h2-light'}
  <h2 class={mode}>
    <span>{bold}</span>
    <br />
    {regular}
  </h2>
{:else if mode === 'h2-dark'}
  <h2 class={mode}>
    <span>{bold}</span>
    {regular}
  </h2>
{:else if mode === 'h2-blue'}
  <h2 class={mode}>
    <span>{bold}</span>
    {regular}
  </h2>
{/if}
