<script>
	import HeroHeader from "../components/UI/HeroHeader.svelte";
	import AboutGrid from "../components/About/AboutGrid.svelte";
	let bold = "¿Que nos hace";
	let regular = "únicos?";
	let tagline =
		"INSONOS es una firma de diseño que se especializa en el desarrollo de proyectos de acústica arquitectónica y tratamiento sonoro en Colombia y américa latina.";
</script>

<svelte:head>
	<title>Nuestra Empresa</title>
</svelte:head>
<HeroHeader {bold} {regular} {tagline} />
<div class="wrapper">
	<AboutGrid />
</div>

