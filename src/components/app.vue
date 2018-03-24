<template>
  <p id="app">
    {{ message }}
  </p>
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