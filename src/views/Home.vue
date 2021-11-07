<template>
  <transition name="fade">
    <div class="container" v-if="show">
      <h1>Vanguard</h1>
      <h2>Simple, lightweight & intuitive camouflage tracker for Call of Duty: Vanguard</h2>

      <div class="buttons">
        <button @click="$router.push('/atomic')" class="atomic"><span>Track Atomic</span><eva-icon name="arrow-forward" fill="white"></eva-icon></button>
        <button @click="$router.push('/aether')" class="aether"><span>Track Dark Aether</span><eva-icon name="arrow-forward" fill="white"></eva-icon></button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },

  mounted () {
    this.show = true;
  },
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}

h1 {
  font-size: 28px;
  font-weight: 600;
  margin-top: 75px;

  span {
    color: rgba($text-color, .5);
  }
}

h2 {
  font-size: 20px;
  line-height: 1.5;
  margin: 30px auto 0;
  max-width: 450px;
}

.buttons {
  margin-top: 40px;

  button {
    align-items: center;
    display: inline-flex;
    color: $text-color;
    justify-content: center;
    padding: 12px 24px;

    @media (max-width: $mobile) {
      display: flex;
    }

    + button {
      margin-left: 20px;

      @media (max-width: $mobile) {
        margin-top: 20px;
        margin-left: 0;
      }
    }

    &:hover {
      transform: translateY(-5%);
      opacity: 1;

      i {
        transform: translateX(7.5%);
      }
    }

    &.atomic {
      background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgb(255, 196, 0) 0%, rgba(240,107,5,1) 90% );
    }

    &.aether {
      background-image: radial-gradient( circle farthest-corner at -1% 57.5%,  rgba(19,170,82,1) 0%, rgba(0,102,43,1) 90% );
    }

    span {
      white-space: nowrap;
    }

    i {
      margin-left: 8px;
      position: relative;
      top: 2px;
      transition: $transition;
    }
  }
}
</style>