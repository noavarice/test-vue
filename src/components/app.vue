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
  name: 'app',
  data() {
    return {
      message: 'Hello, world!',
    }
  }
}
</script>
