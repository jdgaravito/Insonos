<script context="module">
</script>

<script>
  import Meta from '../components/Meta.svelte';
  import HomeBanner from "../components/HomeBanner/HomeBanner.svelte";
  import HomePortfolio from "../components/HomePortfolio/HomePortfolio.svelte";
  import LogosCarrousel from "../components/HomeBanner/LogosCarrousel.svelte";

  const metadata = {
		description: 'Acústica arquitectónica, control de ruido, insonorización, aislamiento acústico,  ',
		image: 'https://svelte.dev/images/twitter-card.png',
		imageAlt: 'Insonos acústica arqutectónica, control de ruido, insonorización, aislamiento acústico',
		url:'insonos.co'
	}

</script>

<style>

</style>

<svelte:head>
  <Meta {metadata}/>
  <title>Insonos, experiencias y diseño acústico</title>
</svelte:head>

<HomeBanner />
<!-- <LogosCarrousel /> -->
<HomePortfolio />



