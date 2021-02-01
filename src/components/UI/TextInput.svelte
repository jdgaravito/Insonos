<script>
  export let controlType = null;
  export let id;
  export let label;
  export let rows = null;
  export let value;
  export let placeholder = "";
  export let type = "text";
  export let helptext = "";
  export let optional = null;
  export let valid = true;
  export let validityMessage = '';

// variable para detectar si esta en uso, para las validaciones usando el evento on:blur
  let touched = false;
</script>

<style>
  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    transition: border-color 0.1s ease-out;
    padding: 0.7rem 0.6rem 0.7rem 0.6rem;
  }
  input::placeholder,
  textarea::placeholder {
    opacity: 50%;
    font-weight: 100;
  }
  input:focus,
  textarea:focus {
    border-color: var(--main_color);
    outline: none;
  }

  label {
    display: block;
    margin-bottom: 0.1rem;
    width: 100%;
    font-weight: bold;
  }
  .optionalField {
    font-weight: 100;
    opacity: 50%;
    display: inline-block;
  }
  .helperText {
    font-weight: 300;
    opacity: 80%;
    margin: 0.5rem 0 0.5rem 0;
  }
  .formControl {
    padding: 0.5rem 0;
    width: 100%;
    margin: 0.25rem 0;
  }
  .invalid {
    border-color: #ef798a;
    background: #fff6f8;
  }
  .error-message{
    color: #ef798a;
    font-weight: 100;
  }
</style>

<div class="formControl">
  <label for={id}>
    {label}
    {#if optional}
      <span class="optionalField">(opcional)</span>
    {/if}
  </label>

  <p class="helperText">{helptext}</p>
  {#if controlType === 'textarea'}
    <!-- on:input is just for forwarding the custom event -->
    <textarea class:invalid="{!valid && touched}" {rows} {id} {value} on:input on:blur={()=> touched = true}/>
  {:else}
    <input class:invalid="{!valid && touched}" {type} {id} {value} {placeholder} on:input on:blur={()=> touched = true}/>
  {/if}
  {#if validityMessage && !valid  && touched}
    <p class="error-message">
      {validityMessage}
    </p>
  {/if}
</div>

