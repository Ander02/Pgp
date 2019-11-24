<template>
  <div class="container-cards">
    <md-card md-with-hover v-bind:key="item.title"  v-for="item in areas">
      <md-ripple>
        <md-card-header>
          <h3 class="md-title">{{item.title}}</h3>
        </md-card-header>

        <md-card-content>{{item.currentQuestions}} / {{item.totalQuestions}}</md-card-content>

        <md-card-actions>
          <md-button>Action 01</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<style scoped>
</style>

<script>

export default {
  data() {
    return {"areas": this.$store.state.areas}
  }
};
</script>