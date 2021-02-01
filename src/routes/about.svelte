<script>
	import HeroHeader from "../components/UI/HeroHeader.svelte";
	import Title from "../components/UI/Title.svelte";
	import ImageSection from "../components/UI/ImageSection.svelte";
	let bold = "¿Quienes";
	let regular = "Somos?";
	let tagline =
	  "Fundada como una firma de consultoría técnica, L.E.Q. INGENIERÍA S.A.S. se especializa en el desarrollo de proyectos de Acústica Arquitectónica y Audio Profesional en Colombia y Latinoamérica.";
   
   let img1 = "/images/components/estudio.jpg";
   let img2 = "/images/components/audio.jpg";
   let img3 = "/images/components/ingenieros.jpg";
  </script>
  
  <style>
	.intro {
	  display: flex;
	  width: 60%;
	  flex-direction: column;
	  padding: 4rem 1.25rem 1.25rem 1.25rem;
	}
	.description {
	  padding-top: 1.125rem;
	  padding-bottom: 5rem;
	  font-weight: 300;
	  opacity: 80%;
	}
  .list{
	padding-left: 1.5rem;
	padding-top: 1rem;
  }
	@media all and (max-width: 650px) {
	  .intro {
		justify-content: center;
		align-content: center;
		width: 90%;
		padding: 2rem 0.625rem 0.625rem 0.625rem;
		text-align: center;
	  }
  
	  .description {
		text-align: center;
	  }
	}
  </style>
  
  <svelte:head>
	<title>Nuestra Empresa</title>
  </svelte:head>
  <HeroHeader {bold} {regular} {tagline} />
  <div class="inner">
  
	<section class="intro">
	  <Title
		mode="h2-dark"
		bold="Acústica | Control de Ruido "
		regular="| Audio Pro" />
	  <p class="description">
		Nuestra empresa cuenta con una prolífica experiencia y equipo de
		profesionales de la industria acústica, arquitectura y sonido para
		aplicación profesional. La especialidad de L.E.Q es proveer soluciones de
		alto nivel.
	  </p>
	</section>
  </div>
  
  <ImageSection image={img1}>
	<span slot="title">
	  <Title mode="h2-dark" bold="Sectores del" regular="Mercado" />
	</span>
	<span slot="description">
	  <p>
		Somos una empresa especializada en todos los sectores del mercado
		profesional de la ingeniería acústica y sistemas de audio; tales como:
	  </p>
	  <ul class="list">
		<li>Corporativo / Oficinas / Salas de Conferencia</li>
		<li>Iglesias / Teatros / Salas de Concierto</li>
		<li>Industrias / Fábricas / Plantas de Producción</li>
		<li>Hotelería / Resorts / Centros de Convenciones</li>
		<li>Comercial / Tiendas de Retail / Centros Comerciales</li>
	  </ul>
	</span>
  </ImageSection>
  <ImageSection image={img2} mode="right" color="azul">
	<span slot="title">
	  <Title mode="h2-light" bold="Diseño Especializado +" regular="Impacto Estético" />
	</span>
	<span slot="description">
	  <p>
		Contamos con herramientas de software de última tecnología para realizar diseños personalizados con análisis acústico y fundamentos técnicos sólidos, así como render 3D para visualización estética realista de todas nuestras soluciones.
	  </p>
	</span>
  </ImageSection>
  
  <ImageSection image={img3}>
	<span slot="title">
	  <Title mode="h2-dark" bold="Atención y Servicio" regular="Personalizado" />
	</span>
	<span slot="description">
	  <p>
		Cada proyecto o requerimiento es atendido por nuestro equipo de profesionales de ingeniería de forma personalizada, realizando recopilación de información específica. Nuestro objetivo principal es proveer soluciones puntuales bajo diseño a cada una de las necesidades de nuestros clientes.
	  </p>
	</span>
  </ImageSection>