<script>
  import ContactCard from "../components/Contact/ContactCard.svelte";
  import Meta from '../components/Meta.svelte';
  import Title from "../components/UI/Title.svelte";

  const metadata = {
		description: 'Acústica arquitectónica, control de ruido, insonorización, aislamiento acústico,  ',
		image: 'https://svelte.dev/images/twitter-card.png',
		imageAlt: 'Insonos acústica arqutectónica, control de ruido, insonorización, aislamiento acústico',
		url:'insonos.co'
	}


</script>

<svelte:head>
  <Meta {metadata}/>
  <title>Contáctanos</title>
</svelte:head>

<div class="wrapper">
  <div class="contact-container">
    <section class="contact-section">
      <ContactCard />
    </section>
    <section class="contact-form">
        <iframe class="frame1" scrolling="no"
            title="contacto"
            src="https://us7.list-manage.com/contact-form?u=5567743dda6293ffc143d732e&form_id=14202a7b9c5706dfe7d4797f029276c3"
            frameborder="0"
        />
    </section>
    
  </div>
</div>

<style>
  .wrapper {
    margin-top: -6.25rem;
  }
  .contact-section {
    height: 100%;
    background-color: #3e2f90;
    opacity: 1;
    background-image: repeating-radial-gradient(
        circle at 0 0,
        transparent 0,
        #3e2f90 16px
      ),
      repeating-linear-gradient(#484b8355, #484b83);
  }
  .contact-container {
    display: grid;
    grid-template-columns: 1.5fr 2.5fr;
  }
  
  .contact-form{
      width: 100%;
      height: 100%;
      margin: 0 0 0 0;
      padding: 1rem 0 0 0;
      overflow: hidden;
  }

  .contact-form iframe{
        width: 100%;
        height: 900px;
  }
  @media all and (max-width: 1080px) {
    
    .wrapper {
      margin-top: 0;
    }
    .contact-container {
      grid-template-columns: 1fr;
    }
  }

  @media all and (min-width:1080px){
    .contact-section{
      padding-top: 5rem;
      height: auto;
    }
  }
</style>
