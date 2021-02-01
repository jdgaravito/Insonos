<script>
  import Button from "../UI/Button.svelte";
  let type;
  let icon;
  let clients = [{}];
</script>

<div class="wrapper">
  <ul class="circles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
  <div class="inner area">
    <div class="banner context">
      <div class="teatro c2">
        <div class="main-image">
          
        </div>
      </div>
      <div class="bannerHeader c1">
        <h1 class="Heading">
          Creamos Experiencias Acústicas
          <span class="bold">Asombrosas</span>
        </h1>
        <div class="taglineContainer">
          <h4 class="tagline">
            Acústica Arquitectónica, Control de Ruido, Diseño Acústico,
            Consultoría y Soluciones de Audio Profesional
          </h4>
        </div>
        <div class="buttons">
          <div class="mainButton">
            <Button type="button" mode="special">Contactar</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="area">
  

</div>
<style>
  .wrapper {
    background: var(--main_color);
    margin-top: -18.75rem;
    padding-top: 18.75rem;
  }

  .context {
    position: absolute;}

  .banner {
    display: grid;
    grid-template: auto auto / 0.5fr 2fr 2fr 0.5fr;
    grid-gap: 1.875rem;
  }
  h1 {
    color: #ffffff;
    font-weight: 100;
    font-size: calc(1.875rem + 6 * ((100vw - 320px) / 680));
  }
  .Heading {
    padding-bottom: 1rem;
  }
  .bold {
    font-weight: 500;
  }
  .taglineContainer {
    opacity: 79%;
  }
  h4 {
    color: #ffffff;
    font-weight: 300;
  }
  .tagline {
    font-size: calc(0.75rem + 2 * ((100vw - 20rem) / 680));
    padding-bottom: 30px;
  }
  .main-image {
    padding-top: 20px;
  }
  .area{
    background: var(--main_color);  
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
    width: 100%;
    height:30vh;
    
   
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}

  @media all and (min-width: 601px) {
    .c1 {
      grid-column: 2 / 3;
      grid-row: 1 / -1;
      padding-top: 6.25rem;
    }

    .c2 {
      grid-column-start: 3;
      grid-row: 1 / -1;
      padding-bottom: 1.875rem;
    }

    .main-image {
      max-width: 31.25rem;
      min-width: 21.5rem;
      margin: 0 auto;
    }
  }

  @media all and (max-width: 600px) {
    .banner {
      display: block;
      text-align: center;
    }
    .tagline {
      text-align: center;
      margin: auto 0 auto;
    }

    .main-image {
      width: 300px;
      margin: 0 auto;
    }
    .teatro {
      display: block;
      justify-content: center;
    }

    .c1 {
      padding-top: 0;
    }
    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
</style>
