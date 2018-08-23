<template>
  <div class="home">
    <v-tabs>
      <v-tabs-slider></v-tabs-slider>
      <v-tab to="/bio">Bio</v-tab>
    </v-tabs>
    <div class="tab__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
};
</script>

<style lang="scss">
$slider-color: #4CAF50;

.tab__content {
  padding: 20px 0;
}

.v-tabs__slider {
  background-color: $slider-color;
  border-color: $slider-color;
}
</style>
