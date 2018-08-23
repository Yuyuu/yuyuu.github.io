<template>
  <v-container fluid="" class="py-0">
      <v-flex xs12="">
        <v-layout row="" align-center="" justify-start="" fill-height="">
          <v-avatar size="72" class="elevation-1">
            <img src="../assets/avatar.jpg" alt="avatar">
          </v-avatar>
          <v-container fluid="" class="py-0">
            <v-flex xs12="">
              <v-layout column="" align-start="" justify-start="" fill-height="">
                <h1>Vincent Tertre</h1>
                <nav>
                  <a href="https://github.com/vtertre" title="GitHub account">GitHub</a> |
                  <a href="https://linkedin.com/in/vincenttertre" title="LinkedIn account">LinkedIn</a>
                </nav>
              </v-layout>
            </v-flex>
          </v-container>
        </v-layout>
      </v-flex>
    </v-container>
</template>

<script>
export default {
  name: 'TheHeader'
};
</script>

<style scoped lang="scss">
</style>
