<script>
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  let name = "";
  let email = "";
  let phone = "";
  let message = "";
</script>

<style>
  .formWrapper {
    padding-top: 1.875rem;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 1.875rem;
  }

  .contactDetails {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .half {
    width: 48%;
  }
  .sendButton {
    display: flex;
    justify-content: center;
  }
</style>

<div class="formWrapper">
  <form>
    <div class="name">
      <TextInput type="text" id="name" label="Nombre Completo" value={name} />
    </div>
    <div class="contactDetails">
      <div class="email half">
        <TextInput
          type="email half"
          id="email"
          label="Correo Electrónico:"
          value={email} />
      </div>
      <div class="phone half">
        <TextInput
          type="text"
          id="phone"
          label="Número Celular:"
          value={phone} />
      </div>

    </div>
    <div class="message">
      <TextInput
        controlType="textarea"
        id="message"
        label="Mensaje"
        rows="3"
        value={message} />
    </div>
    <div class="sendButton">
      <Button type="button">Enviar</Button>
    </div>
  </form>
</div>
