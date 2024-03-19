<template>
  <div class="a123">
    <div class="aqwe">{{ text }}</div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const text = ref('')
  function hello() {
    text.value = 'hello,world'
    return text
  }

  hello()
</script>

<style lang="less" scoped>
  .a123 {
    .aqwe {
      background-color: red;
    }

    .asd {
      color: red;
    }
  }
</style>
