<template>
  <div id="app" :style="{ overflowY: mobileNav ? 'hidden' : null }">
    <transition name="slidedown">
      <div class="notice" v-if="showNotice">
        <p>If you like this site, show your appreciation by <a href="https://www.buymeacoffee.com/emilcarlsson">buying me a beer</a> 🍺</p>
        <eva-icon name="close" fill="white" width="16" height="16" @click="showNotice = false"></eva-icon>
      </div>
    </transition>

    <nav class="container">
      <router-link to="/" class="logo">
        <div class="icon-container">
          <img :src="require(`./assets/${logo}.png`)">
        </div>
        <p><span>Vanguard</span></p>
      </router-link>
      <div>
        <router-link to="/atomic">Atomic</router-link>
        <router-link to="/aether">Dark Aether</router-link>
        <router-link to="/settings" class="icon settings" content="Settings" v-tippy="{ placement: 'bottom' }">
          <eva-icon name="settings-2-outline" fill="white"></eva-icon>
        </router-link>
      </div>
      <eva-icon class="mobile-nav-toggle" name="menu" fill="white" @click="mobileNav = !mobileNav"></eva-icon>
    </nav>

    <transition name="fade">
      <nav class="mobile" v-if="mobileNav">
        <div class="header">
          <router-link to="/" class="logo">
            <div class="icon-container">
              <img :src="require(`./assets/${logo}.png`)">
            </div>
            <p><span>Vanguard</span></p>
          </router-link>
          <eva-icon name="close" fill="white" @click="mobileNav = !mobileNav"></eva-icon>
        </div>
        <div>
          <router-link to="/atomic">Atomic</router-link>
          <router-link to="/aether">Dark Aether</router-link>
        </div>
        <div class="footer">
          <router-link to="/settings">Settings</router-link>
          <router-link to="/about">About</router-link>
          <a href="https://github.com/carlssonemil/vanguard">GitHub</a>

          <!-- TODO: Add link to Cold War -->
          <div class="info">
            <p>Looking for a camouflage tracker for <em>Modern Warfare (2019)</em>? <a href="https://damascus.vercel.app/">Check it out here!</a> 😎</p>
          </div>

          <a href="https://www.buymeacoffee.com/emilcarlsson" class="button">Support me by buying me a beer 🍺</a>
        </div>
      </nav>
    </transition>

    <main>
      <router-view/>
    </main>

    <footer class="container">
      <div>Made by <a href="https://emilcarlsson.se/">Emil Carlsson</a></div>
      
      <div>
        <router-link to="/about">About</router-link>
        <a href="https://github.com/carlssonemil/vanguard">GitHub</a>
      </div>
    </footer>

    <notifications position="top center">
      <template slot="body" slot-scope="props">
        <div class="notification" :class="props.item.type" @click="props.close">
          <p class="title">{{ props.item.title }}</p>
          <eva-icon class="remove" name="close" fill="white" width="18" height="18"></eva-icon>
        </div>
      </template>
    </notifications>

    <Debug v-if="!production" />
  </div>
</template>

<script>
import Debug from '@/components/Debug.vue'

export default {
  components: {
    Debug,
  },

  data() {
    return {
      production: process.env.NODE_ENV === 'production',
      mobileNav: false,
      showNotice: false
    }
  },

  computed: {
    logo() {
      return this.$route.name === 'Aether' ? 'aether' : 'atomic';
    }
  },

  watch: {
    $route() {
      this.mobileNav = false;
    }
  },

  async beforeCreate() {
    await this.$store.dispatch('getStoredData');
  },

  mounted() {
    setTimeout(() => {
      this.showNotice = true;
    }, 15000);
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@import '@/scss/main';

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
