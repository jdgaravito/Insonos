<script>
  export let instagram;
  export let youtube;
  export let phoneNumber1;
  import FaWhatsapp from "svelte-icons/fa/FaWhatsapp.svelte";
  import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
  import FaYoutube from "svelte-icons/fa/FaYoutube.svelte";
</script>

<style>
  .topHeader {
    background: var(--dark_gradient);
    color: #ffffff;
    font-size: 1rem;
    min-height: 2.5rem;
  }
  .topHeaderContainer {
    display: flex;
    justify-content: space-between;
    line-height: 2.5rem;
  }
  .wp {
    padding-left: 0.625rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 0.625rem;
  }

  .icon {
    width: 1.5625rem;
    height: 1.5625rem;
    padding-right: 0.3125rem;
  }

  .yt {
    padding-top: 0.1875rem;
    width: 1.875rem;
    height: 1.875rem;
  }
  a {
    text-decoration: none;
    color: #ffffff;
  }
  .icon:hover {
    opacity: 80%;
  }
  @media all and (max-width: 768px) {
   
    .wp {
      display: none;
    }
    .topHeaderContainer {
      display: block;
      width: 100%;
    }
    .social {
      display: flex;
      justify-self: center;
      margin: 0 auto;
      padding-right: 0;
    }
  }
</style>

<div class="headerWrapper wrapper">
  <div class="topHeader">
    <div class="topHeaderContainer inner">
      <div class="wp">
        <div class="icon wp">
          <FaWhatsapp />
        </div>
        <a id="wpnumber" href="https://api.whatsapp.com/send?phone=73204534334&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Insonos%20.">{phoneNumber1}</a>
      </div>
      <div class="social">
        <a href={instagram}>
          <div class="icon">
            <FaInstagram />
          </div>
        </a>
        <a href={youtube}>
          <div class="icon yt">
            <FaYoutube />
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
