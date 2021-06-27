<template>
  <div class="main">
    <VidSection />
    <BestOfRemote />
    <Goal />
  </div>
</template>

<script>
import VidSection from './vidSection/VidSection.vue';
import BestOfRemote from './bestOfRemote/BestOfRemote.vue';
import Goal from './goal/Goal.vue';

export default {
  name: 'Landing',
  components: {
    VidSection,
    BestOfRemote,
    Goal
  }
}
</script>

<style lang="scss">
  @import './style.scss';
</style>
