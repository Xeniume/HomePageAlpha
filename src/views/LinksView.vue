<script setup>
import NavBar from '@/components/NavBar.vue';
import InlineLink from '@/components/InlineLink.vue';
</script>

<template>
  <NavBar title="Xeniume.Links" path="/links" />
  <div class="content">
    <div class="text">
      <p>Here, you can find links to what attracts Xeniume.</p>
      <p>
        Including:
        <br />
        his <InlineLink to="/links/friends">close friends</InlineLink>,
        <br />
        the <InlineLink to="/links/big-shots">big shots</InlineLink> in his eyes.
        <br />
        and the other <InlineLink to="/links/blogroll">charming souls!</InlineLink>
      </p>
    </div>
  </div>
</template>
