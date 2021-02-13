<script>
 
</script>

<style>
  

  .iconfeature {
    display: flex;
    padding-bottom: 2.5rem;
  }
  .icon {
    width: 1.875rem;
    height: 1.875rem;
  }
  .content {
    padding-top: 0.6rem;
    line-height: 0.625rem;
    text-decoration: none;
    padding-left: 1.5625rem;
    display: inline-block;
    vertical-align: top;
  }
</style>

<div class="iconfeature">
  <div class="icon">
    <slot name="icon">
      <p>Missing icon</p>
    </slot>
  </div>
  <div class="content">
    <slot name="content">Missing content</slot>
  </div>
  {#if false}<slot></slot>{/if}
</div>
