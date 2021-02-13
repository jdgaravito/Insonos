<script>
  import HeroHeader from "../components/UI/HeroHeader.svelte";
  import ProductsGrid from "../components/Products/ProductsGrid.svelte";

  let bold = "Nuestros";
  let regular = "Productos";
  let tagline =
    "Utilizamos y comercializamos diferentes productos para mejorar la acústica de tus espacios. Proveemos también estos materiales de forma personalziada para tu obra";
</script>

<svelte:head>
  <title>Nuestros Productos</title>
</svelte:head>
<HeroHeader {bold} {regular} {tagline} />
<div class="wrapper">
  <ProductsGrid />
</div>
