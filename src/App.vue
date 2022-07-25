<template>
<div>
  <app-header />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is=" Component"></component>
    </transition>  
  </router-view>

  <app-player />

  <auth-modal />
</div>
</template>
<script>
import AppPlayer from './components/Player.vue';
import AppHeader from './components/AppHeader.vue';
import AuthModal from './components/Auth.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AuthModal,
    AppPlayer,
  },
  created(){
    this.$store.dispatch('init_login')
  }
};
</script>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-leave-to {
  transition: all 0.5x linear;
  opacity: 0;
}

</style>
