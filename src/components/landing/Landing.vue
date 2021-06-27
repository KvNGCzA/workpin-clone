<template>
  <div class="main">
    <VidSection />
    <BestOfRemote />
    <Goal />
    <SecretSauce />
    <Harmony />
  </div>
</template>

<script>
import VidSection from './vidSection/VidSection.vue';
import BestOfRemote from './bestOfRemote/BestOfRemote.vue';
import Goal from './goal/Goal.vue';
import SecretSauce from './secretSauce/SecretSauce.vue';
import Harmony from './harmony/Harmony.vue';

export default {
  name: 'Landing',
  components: {
    VidSection,
    BestOfRemote,
    Goal,
    SecretSauce,
    Harmony
  }
}
</script>

<style lang="scss">
  @import './style.scss';
</style>
