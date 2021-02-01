<script>
  export let wpNumber;
  export let instagram;
  export let youtube;
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
        <a id="wpnumber" href="https://wa.me/{wpNumber}">{wpNumber}</a>
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
