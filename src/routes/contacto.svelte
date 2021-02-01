<script>
  import ContactCard from "../components/Contact/ContactCard.svelte";
  import ContactForm from "../components/Contact/ContactForm.svelte";
  import Title from "../components/UI/Title.svelte";
</script>

<svelte:head>
  <title>Contacto</title>
</svelte:head>

<div class="wrapper">
  <div class="imagecontainer">
    <img
      class="paneles"
      src="/images/components/contacto.jpg"
      alt="Paneles Acústicos LEQ"
    />
  </div>
  <div class="contact-container">
    <section class="contact-section">
      <ContactCard />
    </section>
    <section class="contact-form">
      <div class="title-container">
        <div class="form-title">
          <Title
            mode="h2-dark"
            bold="¿Cómo podemos"
            regular="ayudar a su empresa?"
          />
        </div>
      </div>
      <div class="formContainer">
        <ContactForm />
      </div>
    </section>
  </div>
</div>

<style>
  .wrapper {
    margin-top: -6.25rem;
  }
  .imagecontainer {
    background: var(--main_gradient);
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
  .title-container {
    display: flex;
  }
  .form-title {
    padding-top: 4.375rem;
    text-align: center;
    margin: 0 auto;
    max-width: 350px;
  }
  @media all and (max-width: 1080px) {
    .imagecontainer {
      background: var(--main_color);
    }
    .wrapper {
      margin-top: 0;
    }
    .contact-container {
      grid-template-columns: 1fr;
    }
  }
</style>
