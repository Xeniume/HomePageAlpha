<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
  }
});

const isInSite = props.to.startsWith('/');
const computedMode = props.mode ? props.mode : (isInSite ? "stay" : "blank");
</script>

<template>
  <template v-if="computedMode == 'stay'">
    <router-link :to="encodeURI(to)" class="cursor" v-if="isInSite">
      <slot />
    </router-link>
    <a :href="to" class="cursor" v-else>
      <slot />
    </a>
  </template>
  <template v-else-if="computedMode == 'blank'">
    <a :href="to" target="_blank" class="cursor">
      <slot />
    </a>
  </template>
</template>

<style scoped>
a {
  text-decoration: none;
  display: inline-block;
  color: #1ba784;
  background: linear-gradient(to right, #3a4f66, #304142) no-repeat center bottom;
  background-size: 0 1px;
  transition: all 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

a:hover {
  color: #192a3d;
  background-size: 100% 1px;
}
</style>
