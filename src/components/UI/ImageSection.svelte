<script>
  export let image;
  export let mode="";
  export let color ="";
</script>

<style>
  .wrapper {
    background-image: var(--image);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .container{
      display: flex;
      align-content: flex-end;
      padding-top: 200px;
  }
  .right{
      justify-content: flex-end;
  }
  .box{
      display: block;
      background: var(--light_gradient);
      width: 40%;
  }
  
  .azul{
     background: var(--main_gradient);
     color: #ffffff; 
  }
  .title{
      padding: 20px;
      padding-left: 3.75rem;
  }
  .description{
      font-weight: 300;
      padding: 1.25rem;
      opacity: 80%;
      padding-left: 3.75rem;

  }
  .missing {
    color: #999;
  }
</style>

<div class="wrapper" style="--image: url({image});">
  <section class="inner container {mode} ">
    <div class="box {color}">
      <div class="title">
        <slot name="title">
          <span class="missing">Missing Title</span>
        </slot>
      </div>
      <div class="description">
        <slot name="description">
          <span class="missing">Missing Description</span>
        </slot>
      </div>
    </div>

  </section>
</div>
