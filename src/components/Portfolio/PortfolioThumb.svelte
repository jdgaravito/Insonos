<script>
  export let mainImage;
  export let name;
</script>

<style>
  .projectFrame {
    overflow: hidden;
    border-radius: 0.625rem;
  }
  .image {
    position: relative;
    color: #ffffff;
    list-style-type: none;
    width: 140px;
    height: 140px;
    display: block;
  }
  .image::before {
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

  .image:hover:before {
    filter: brightness(50%);
    transform: scale(1);
  }

  @media all and (min-width: 150px) and (max-width: 500px) {
    .image {
      width: calc(90px + (150 - 90) * ((100vw - 300px) / (500 - 100)));
      height: calc(90px + (150 - 90) * ((100vw - 300px) / (500 - 100)));
    }
  }

  @media all and (min-width: 501px) and (max-width: 900px) {
    .image {
      width: calc(140px + (260 - 140) * ((100vw - 500px) / (900 - 500)));
      height: calc(140px + (260 - 140) * ((100vw - 500px) / (900 - 500)));
    }
  }
  @media all and (min-width: 901px) and (max-width: 1080px) {
    .image {
      width: calc(140px + (260 - 140) * ((100vw - 500px) / (900 - 500)));
      height: calc(140px + (260 - 140) * ((100vw - 500px) / (900 - 500)));
    }
  }

  @media all and (min-width: 1081px) and (max-width: 1500px) {
    .image {
      width: calc(140px + (260 - 140) * ((100vw - 1080px) / (1600 - 1080)));
      height: calc(140px + (260 - 140) * ((100vw - 1080px) / (1600 - 1080)));
    }
  }
  @media all and (min-width: 1501px) and (max-width: 1800px){
    .image {
      width: calc(140px + (260 - 140) * ((100vw - 1080px) / (2200 - 1500)));
      height: calc(140px + (260 - 140) * ((100vw - 1080px) / (2200- 1500)));
    }

  }

  @media all and (min-width: 1801px){
    .image{
      width: 250px;
      height: 200px;
    }

  }
</style>

<div class="projectFrame">
    <figure alt={name} class="image" style="--image: url({mainImage})" />
</div>
