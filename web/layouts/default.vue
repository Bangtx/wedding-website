<template lang="pug">
  div
    header-bar
    slot
    span ok
</template>
<script setup lang="ts">
import {HeaderBar} from '../components'
</script>