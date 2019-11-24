<template>
  <FormLogin />
</template>

<script>
// @ is an alias to /src
import FormLogin from '@/components/FormLogin.vue';
import router from '@/router';

export default {
  name: 'login',
  components: {
    FormLogin
  },
  router: router
}
</script>
