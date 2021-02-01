<script>
  export let name;
  export let client;
  export let mainImage;
</script>

<style>
  h1 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
  }
  p {
    font-weight: 300;
    margin-bottom: 2rem;
    padding-right: 1.25rem;
  }
  .projectFrame {
    overflow: hidden;
    border-radius: 0.625rem;
  }
  .imagecontainer {
    position: relative;
    color: #ffffff;
    list-style-type: none;
    width: 100%;
    min-height: 340px;
    display: block;
  }
  .imagecontainer::before {
    content: "";
    position: absolute;
    top: 0;
    left: 1;
    width: 100%;
    height: 100%;
    background-image: var(--image);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
    filter: brightness(100%);
  }

  .imagecontainer:hover:before {
    filter: brightness(50%);
    transform: scale(1);
  }
  .image-inside {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    align-content: end;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    padding-left: 2rem;
    transform: translate3d(0, 1rem, 0);
    opacity: 0;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    pointer-events: none;
  }
.imagecontainer:hover .image-inside {
  transform: translate3d( 0, 0, 0);
  opacity: 1;
}
</style>

<div class="projectFrame">
    <figure class="imagecontainer" style="--image: url({mainImage});">
      <figcaption class="image-inside">
        <div class="project-name">
          <h1>{name}</h1>
        </div>
        <div class="project-details">
          <p>{client}</p>
        </div>
      </figcaption>
    </figure>
</div>
