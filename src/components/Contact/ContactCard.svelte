<script>
  import IconFeature from "../UI/IconFeature.svelte";
  import FaWhatsapp from "svelte-icons/fa/FaWhatsapp.svelte";
  import FaRegEnvelope from "svelte-icons/fa/FaRegEnvelope.svelte";
  import MdPlace from "svelte-icons/md/MdPlace.svelte";
</script>

<div class="cardContainer">
  <div class="contentBox inner">
    <div class="copy">
      <div class="title">
        <h1>Contacto</h1>
      </div>
      <div class="text">
        <p class="description">
          Contacta con nuestro equipo de profesionales y recibe atención
          personalizada con tus necesidades en proyectos de diseño acústico,
          insonorización, estudios de ruido y tratamientos acuísticos.
        </p>
      </div>
    </div>
    <div class="contact-info">
      <ul>
        <li>
          <IconFeature>
            <span slot="icon">
              <MdPlace />
            </span>
            <span slot="content">
              <p>Castillos de Puente Largo</p>
              <br />
              <p>Bogotá - Colombia</p>
            </span>
          </IconFeature>
        </li>

        <li>
          <IconFeature>
            <span slot="icon">
              <FaWhatsapp />
            </span>
            <span slot="content">
              <p>+57 320 4534334</p>
            </span>
          </IconFeature>
        </li>

        <li>
          <IconFeature>
            <span slot="icon">
              <FaRegEnvelope />
            </span>
            <span slot="content">
              <div class="container">
                <a
                  class="link"
                  style="color: #ffffff; text-decoration: none; display:
                  inline-block;"
                  href="mailto:info@insonos.co"
                >
                  info@insonos.co
                </a>
              </div>
            </span>
          </IconFeature>
        </li>
      </ul>
    </div>
  </div>
</div>

<style>
  .cardContainer {
    margin-top: 0;
  }
  .contentBox {
    color: #ffffff;
    padding-top: 4.375rem;
    max-width: 21.875rem;
  }
  h1 {
    font-weight: 700;
    font-size: calc(30px + 6 * ((100vw - 320px) / 680));
  }
  ul {
    list-style-type: none;
  }
  a:hover {
    opacity: 80%;
  }
  .description {
    padding-top: 2.25rem;
    font-weight: 100;
    padding-bottom: 6.25rem;
  }
  .link {
    line-height: 10px;
  }

  @media all and (max-width: 1080px) {
    .contentBox {
      max-width: 90%;
      padding-top: 30px;
    }

    ul {
      display: flex;
      justify-content: space-between;
    }

    .description {
      padding-bottom: 3rem;
    }
  }

  @media all and (max-width: 800px) {
    .contentBox {
      text-align: center;
    }
    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    li {
      padding-right: 0.9375rem;
    }
  }
</style>
