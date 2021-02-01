<script>
  import Title from "./Title.svelte";
  export let bold;
  export let regular;
  export let tagline;
</script>

<style>
  .wrapper {
    background: var(--main_color);
    margin-top: -18.75rem;
    padding-top: 18.75rem;
  }
  .title {
    padding-top: 7.0625rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: center;
  }
  .tagline {
    margin: 0 auto;
    font-weight: 300;
    color: #ffffff;
    opacity: 90%;
    display: block;
    text-align: center;
    max-width: 30rem;
    padding-bottom: 5rem;
  }
</style>

<div class="wrapper">
  <div class="inner">
    <div class="title">
      <Title mode="h1-light" {bold} {regular} />
    </div>

    <h3 class="tagline">{tagline}</h3>
  </div>
</div>
