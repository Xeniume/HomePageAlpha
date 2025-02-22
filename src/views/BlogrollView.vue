<script setup>
import NavBar from '@/components/NavBar.vue';
import SocialCard from '@/components/SocialCard.vue';
</script>

<template>
  <NavBar title="Xeniume.Links.Blogroll" path="/links/blogroll" />
  <div class="content">
    <div class="text">
      <p>Roaming the Internet~</p>
    </div>

    <div>
      <SocialCard name="終わり群星" avatar="https://gcore.jsdelivr.net/gh/talentestors/cdn@latest/img/custom/avatar.jpg"
        :links="{
          'Home': { url: 'https://stazxr.cn/', icon: 'fas fa-home' },
          'GitHub': { url: 'https://github.com/talentestors', icon: 'fab fa-github' },
        }">
        愿此行，终抵群星！
      </SocialCard>
    </div>
  </div>
</template>
