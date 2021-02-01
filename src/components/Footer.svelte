<script>
  import Navlist from "./Navlist.svelte";
  import FaWhatsapp from "svelte-icons/fa/FaWhatsapp.svelte";
  import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
  import FaYoutube from "svelte-icons/fa/FaYoutube.svelte";
  import MdPlace from "svelte-icons/md/MdPlace.svelte";
  import MdSmartphone from 'svelte-icons/md/MdSmartphone.svelte'
  import FaRegEnvelope from 'svelte-icons/fa/FaRegEnvelope.svelte'
  export let segment;
  export let logoUrl;
  export let address;
  export let country;
  export let city;
  export let phone1;
  export let email1;
  export let instagram;
  export let youtube;
  export let wpNumber;
</script>

<style>
  .footerWrapper {
    background: var(--dark_color);
    color: #ffffff;
    bottom: 0;
    width: 100%;
    min-height: 300px;
  }
  .innerWrapper {
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
    height: 70px;
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
  .yt {
    width: 35px;
    height: 35px;
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
  .wp{
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
</style>

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
      <div class="icon"><MdSmartphone/></div>
      <div class="wp">{phone1}</div>
    </div>
    <div class="email-section">
      <div class="icon"><FaRegEnvelope /></div>
      <div class="email">{email1}</div>
    </div>

    <div class="social">
      <div class="icon yt">
        <a href="{youtube}"><FaYoutube /></a>
      </div>
      <div class="icon">
        <a href="{instagram}"><FaInstagram /></a>
      </div>
      <div class="icon">
        <a href="https://wa.me/{wpNumber}"><FaWhatsapp /></a>
      </div>
    </div>

  </div>
</div>
