<script setup>
import NavBar from '@/components/NavBar.vue';
import InlineLink from '@/components/InlineLink.vue';
</script>

<template>
  <NavBar />
  <div class="content">
    <div class="text">
      <p>Hi, there! 🖖<br />this is Xeniume.</p>
      <p>Nothing special.</p>
      <p>
        If you try to contact Xeniume, you will most likely experience a lengthy waiting time. Nevertheless, he will
        certainly
        try his best to get back to you!
      </p>
      <p>By the way, you can learn more <InlineLink to="/about">about</InlineLink> him here.</p>
    </div>
  </div>
</template>
