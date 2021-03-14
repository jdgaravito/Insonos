<script>
  //imports
  import TopNav from "../components/TopNav.svelte";
  import Footer from "../components/Footer.svelte";
  import MobileNav from "../components/MobileNav.svelte";
  import Nav from "../components/Nav.svelte";
  import LoadingBar from "../components/UI/LoadingBar.svelte";
  import Whatsapp from "../components/Whastapp.svelte";
  //exports
  export let instagram = "https://www.instagram.com/";
  export let youtube = "https://www.youtube.com/";
  let open = false;
  export let segment;
  export let logoUrl = "logo.svg";
  let logoUrl2 = "logo-small.svg";
  let city = "Bogotá";
  let country = "Colombia";
  let address = "Calle 137B # 57A – 60";
  let phone1 = "+57 320 453 4334";
  let email1 = "info@insonos.co";

  // script for making a Headroom header. hides header for better visualization.
  let headerClass = "pin";
  let lastY = 0;
  let posY = 0;
  let lastDirection = "up";

  function changeClass(posY) {
    let result = headerClass;
    const scrolledPxs = lastY - posY;
    const scrollDirection = scrolledPxs < 0 ? "up" : "down";

    const changedDirection = scrollDirection !== lastDirection;

    if (changedDirection) {
      result = scrollDirection === "down" ? "pin" : "unpin";
      lastDirection = scrollDirection;
    }

    lastY = posY;
    return result;
  }

  $: headerClass = changeClass(posY);
</script>

<svelte:window bind:scrollY={posY} />

<header class={headerClass}>
  <LoadingBar />
  <TopNav  {instagram} {youtube} phoneNumber1={phone1} />
  <Nav {logoUrl} {segment} bind:sidebar={open} />
</header>
<main class="wrapper">
  <slot />
  <Whatsapp />
</main>

<Footer
  {logoUrl}
  {city}
  {address}
  {country}
  {phone1}
  {email1}
  {instagram}
  {youtube}
  {segment}
/>
<MobileNav {segment} bind:open />

<style>
  :root {
    --header-height: 120px;
  }
  header {
    position: fixed;
    margin: 0 auto;
    width: 100%;
    transition: all 0.3s linear;
    z-index: 99999;
  }

  main {
    background: #ffffff;
    padding-top: var(--header-height);
    min-height: 30vh;
  }

  .pin {
    top: 0;
  }
  .unpin {
    top: calc(var(--header-height) * -1);
  }
</style>
