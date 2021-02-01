<script>
  export let mode;
</script>

<style>
  .light {
    color: #ffffff;
    text-decoration: none;
  }

  .iconfeature {
    display: flex;
    padding-bottom: 2.5rem;
  }
  .icon {
    width: 1.875rem;
    height: 1.875rem;
  }
  .content {
    line-height: 0.625rem;
    text-decoration: none;
    padding-left: 1.5625rem;
    display: inline-block;
    vertical-align: top;
  }
</style>

<div class="iconfeature {mode}">
  <div class="icon">
    <slot name="icon">
      <p>Missing icon</p>
    </slot>
  </div>
  <div class="content">
    <slot name="content">Missing content</slot>
  </div>
</div>
