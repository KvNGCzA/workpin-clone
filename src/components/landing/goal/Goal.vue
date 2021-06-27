<template>
<div class="goals-cont">
  <div v-for="goal in goals" :key="goal.head" class="goals">
    <div class="text">
      <h3>{{ goal.head }}</h3>
      <p>{{ goal.body }}</p>
    </div>
    <div class="image">
      <img :src="goal.image" />
    </div>
  </div>

</div>
</template>


<script>

export default {
  name: 'Goal',
  data() {
    return {
      goals: [{
        head: "On-demand workspaces across the city",
        body: "Walking distance: Access hundreds of workspaces across the entire city. So, wherever your people live, your office will always be in walking distance.\n\nChoice: Give the choice to work in any work-vibe that is best for an individual's preferences,  work goals and daily moods.\n\nConvenience AI: Our space-matching algorithms make the process as quick and convenient as being in one building – just more productive.",
        image: "https://static.wixstatic.com/media/0d6dd0_bb6cb3670d25412597e9de7c15db5732~mv2.png/v1/fill/w_601,h_353,al_c,lg_1,q_85/workpin_marketplace.webp"
      }, {
        head: "Teams and co-location at the core",
        body: "Teams, not individuals: We built every interaction to bring people together. Automatically coordinating team meetings and individuals' co-location.\n\nMinimal commutes: Using real-time predictive location services you can make sure to have the shortest team commute for any meeting.\n\nProductivity AI: Our space-matching algorithms understand what space is best for your team's work outcomes and suggest the best location.",
        image: "https://static.wixstatic.com/media/0d6dd0_98587b5821f048678f0afdfda1c024dd~mv2.png/v1/fill/w_574,h_338,al_c,lg_1,q_85/workpin_co-location.webp"
      }, {
        head: "For stronger culture and community",
        body: "Culture moments: Do what the office does, just better. Facilitate human interaction and community events at all times.\n\nPurposeful serendipity: Create rituals and nudge people to connect with each other just like they would at your watercooler.\n\nWellbeing AI: Our data analytics detect what your teams need to feel better, and connect you to suitable wellbeing perks you can offer automatically.",
        image: "https://static.wixstatic.com/media/0d6dd0_8296ea02402d4ccf8ee1a1c79fd7ce08~mv2.png/v1/fill/w_658,h_372,al_c,lg_1,q_85/workpin_culture.webp"
      }]
    };
  }
}
</script>

<style lang="scss">
  @import './style.scss';
</style>
