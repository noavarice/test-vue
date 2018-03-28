<template>
<div id="app" class="container">
  <div class="row justify-content-center">
    <div class="col-4 text-center">
      {{ message }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      message: 'Hello, world!',
    }
  }
}
</script>