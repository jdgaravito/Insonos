<script>
  import Navlist from "./Navlist.svelte";
  import FaWhatsapp from "svelte-icons/fa/FaWhatsapp.svelte";
  import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
  import FaFacebookSquare from 'svelte-icons/fa/FaFacebookSquare.svelte';
  import MdPlace from "svelte-icons/md/MdPlace.svelte";
  import MdSmartphone from "svelte-icons/md/MdSmartphone.svelte";
  import FaRegEnvelope from "svelte-icons/fa/FaRegEnvelope.svelte";
  export let segment;
  export let logoUrl;
  export let address;
  export let country;
  export let city;
  export let phone1;
  export let email1;
</script>

<div class="footerWrapper wrapper">
  <div class="innerWrapper inner">
    <div class="nav">
      <Navlist {segment} />
      <hr />
    </div>
    <div class="logo-footer">
      <img class="logoF" src={logoUrl} alt="Logo Insonos" />
    </div>
    <div class="address-section">
      <div class="icon">
        <MdPlace />
      </div>
      <div class="address">
        {address}
        <br />
        {city}, {country}
      </div>
    </div>

    <div class="wp-section">
      <div class="icon"><MdSmartphone /></div>
      <div class="wp">{phone1}</div>
    </div>
    <div class="email-section">
      <div class="icon"><FaRegEnvelope /></div>
      <div class="email">{email1}</div>
    </div>

    <div class="social">
      <div class="icon">
        <a href="https://www.linkedin.com/company/insonos"><FaLinkedin /></a>
      </div>
      <div class="icon">
        <a href="https://www.instagram.com/insonos_co/"><FaInstagram /></a>
      </div>
      <div class="icon">
        <a href="https://www.facebook.com/insonos/"><FaFacebookSquare/></a>
      </div>
      <div class="icon">
        <a href="https://api.whatsapp.com/send?phone=73204534334&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Insonos%20."><FaWhatsapp /></a>
      </div>
    </div>
  </div>
</div>

<style>
  .footerWrapper {
    background: var(--dark_color);
    color: #ffffff;
    bottom: 0;
    width: 100%;
    min-height: 300px;
  }
  .innerWrapper {
    margin: 0 auto;
    display: grid;
    justify-items: center;
    grid-template: repeat(2, 1fr) / repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
  }
  a {
    color: #ffffff;
  }
  .nav {
    padding-top: 25px;
    grid-column: 1/-1;
  }
  .logoF {
    width: 250px;
    height: auto;
  }
  .social {
    grid-column: 1/-1;
    display: inline-flex;
    align-items: center;
    padding: 20px 0 20px 0;
  }

  .icon {
    width: 30px;
    height: 30px;
    padding-right: 5px;
  }
 
  .icon:hover {
    opacity: 70%;
    transform: translateY(2px);
    transition: transform 0.2s ease-in-out; ;
  }
  .address-section {
    padding-top: 10px;
    display: flex;
  }
  .address {
    padding-left: 10px;
  }
  .wp-section {
    padding-top: 10px;
    display: flex;
  }
  .wp {
    padding-left: 10px;
  }
  .email-section {
    padding-top: 10px;
    display: flex;
  }
  .email {
    padding-left: 10px;
  }
  hr {
    border: 0.0213rem solid #ffffff;
  }

  @media all and (min-width: 1700px) {
    .innerWrapper {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media all and (max-width: 600px) {
    .logo-footer{
      padding-top: 20px;
    }
  }
</style>
