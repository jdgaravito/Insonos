<script>
  let hovering;
  let category;
  let mode;
  function enter() {
    hovering = true;
  }

  function leave() {
    hovering = false;
  }
</script>

<style>
  .card {
    background: #ffffff;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    opacity: 90%;
  }
  .card:hover {
    opacity: 100%;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
    transform: translateY(-0.2125rem);
    transition: all 0.2s ease-in-out;
  }
  .innactive {
    opacity: 70%;
  }
  .icon {
    color: var(--main_color);
    height: 50px;
    width: 50px;
    align-self: center;
    padding-right: 2.1875rem;
    padding-left: 1.875rem;
  }
  .missing {
    color: #999;
  }
  .cardContent {
    padding: 10px 20px 10px 0;
  }
  .title {
    color: var(--main_color);
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: capitalize;
    padding-top: 0.3125rem;
    margin-bottom: 0.3125rem;
  }
  .description {
    font-size: 1rem;
    font-weight: 300;
    color: var(--dark_color);
    opacity: 80%;
  }
  @media all and (min-width: 1080px) {
    .card {
      height: 100%;
    }
  }

  @media all and (min-width: 1500px) {
    .card {
      height: 8.125rem;
    }
    .description {
      font-size: 1.3rem;
    }
  }

  @media all and (max-width: 1080px) {
    .card {
      flex-direction: column;
      align-content: center;
    }
    .title {
      text-align: center;
      font-size: 1rem;
    }
    .description {
      text-align: center;
      padding-right: 1rem;
      padding-left: 1rem;
    }
    .icon {
      padding-left: 0;
      padding-right: 0;
      padding-top: 0.3125rem;
    }
  }

  @media all and (max-width: 600px) {
    .card {
      flex-direction: column;
      align-content: center;
      min-height: 18.75rem;
      padding-top: 1.25rem;
      padding-left: 5px;
    }
  }
  @media all and (max-width: 500px) {
    .card {
      flex-direction: column;
      align-content: center;
      min-height: 12rem;
      margin-bottom: 0.625rem;
    }

    .cardContent {
    padding: 10px 10px 0px 0;
  }
  }
</style>

<div class="card {mode}" on:mouseenter={enter} on:mouseleave={leave}>
  <div class="icon">
    <slot name="icon">
      <span class="missing">Missing icon</span>
    </slot>
  </div>
  <div class="cardContent">
    <div class="title">
      <slot name="title">
        <span class="missing">Unknown title</span>
      </slot>
    </div>
    <div class="description">
      <slot name="description">
        <span class="missing">Unknown description</span>
      </slot>
    </div>

  </div>
  {#if false}<slot></slot>{/if}
</div>
