<script>
	import HeroHeader from "../components/UI/HeroHeader.svelte";
	import Title from "../components/UI/Title.svelte";
	import AboutGrid from "../components/About/AboutGrid.svelte";
	// import ImageSection from "../components/UI/ImageSection.svelte";
	let bold = "¿Que nos hace";
	let regular = "únicos?";
	let tagline =
		"INSONOS se especializa en el desarrollo de proyectos de acústica arquitectónica y audio profesional en Colombia y américa latina.";

	let img1 = "/images/components/estudio.jpg";
	let img2 = "/images/components/audio.jpg";
	let img3 = "/images/components/ingenieros.jpg";
</script>

<svelte:head>
	<title>Nuestra Empresa</title>
</svelte:head>
<HeroHeader {bold} {regular} {tagline} />
<div class="inner">
	<AboutGrid />
</div>

<style>
</style>
