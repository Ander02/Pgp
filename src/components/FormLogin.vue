<template>
  <div class="container">
    <md-field>
        <label>Usuário</label>
        <md-input v-model="user"></md-input>
    </md-field>
    <md-field>
        <label>Senha</label>
        <md-input v-model="password" type="password"></md-input>
    </md-field>
    <md-button class="md-raised md-primary">Entrar</md-button>
</div>
</template>

<script>

export default {
  name: 'FormLogin',
  data: () => ({
    'user' : null,
    'password': null
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  min-width: 350px;
  width: 50vw;
  padding: 50px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, .5);
  border-radius: 30px;
}
</style>
