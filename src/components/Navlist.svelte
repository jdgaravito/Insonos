<script>
  export let segment = undefined;
  //   export let navClass;
</script>

<ul class="navlist">
  <li>
    <a class:selected={segment === undefined} href=".">Inicio</a>
  </li>
  <li>
    <a
      rel="prefetch"
      class:selected={segment === "portafolio"}
      href="portafolio"
    >
      Portafolio
    </a>
  </li>
  <li>
    <a class:selected={segment === "about"} href="about">Nuestra Empresa</a>
  </li>
  <li>
    <a class:selected={segment === "servicios"} href="servicios">Servicios</a>
  </li>
  <li>
    <a class:selected={segment === "productos"} href="productos">Productos</a>
  </li>
  <li>
    <a class:selected={segment === "contacto"} href="contacto">Contacto</a>
  </li>
</ul>

<style>
  .navlist {
    display: inline-flex;
    list-style-type: none;
    flex-wrap: wrap;
    justify-content: center;
  }
  a {
    font-weight: 500;
    text-decoration: none;
    color: #ffffff;
    padding: 0 0.625rem 0 0.625rem;
  }
  .selected {
    font-weight: 700;
    text-decoration: underline;
  }
</style>
