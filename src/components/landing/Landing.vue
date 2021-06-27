<template>
  <div class="main">
    <VidSection />
    <BestOfRemote />
  </div>
</template>

<script>
import VidSection from './vidSection/VidSection.vue';
import BestOfRemote from './bestOfRemote/BestOfRemote.vue';

export default {
  name: 'App',
  components: {
    VidSection,
    BestOfRemote
  }
}
</script>

<style lang="scss">
  @import './style.scss';
</style>
