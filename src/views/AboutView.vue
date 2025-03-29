<script setup>
import NavBar from '@/components/NavBar.vue';
import InlineLink from '@/components/InlineLink.vue';
import SocialCard from '@/components/SocialCard.vue';
</script>

<template>
  <NavBar title="Xeniume.About" path="/about" />
  <div class="content">
    <div>
      <SocialCard name="Xeniume" avatar="/favicon.jpg" :links="{
        'Blog': { url: 'https://blog.xeniu.me/', icon: 'fas fa-blog' },
        'GitHub': { url: 'https://github.com/Xeniume', icon: 'fab fa-github' },
        'Email': { url: 'mailto:ohmyxeniume@gmail.com', icon: 'fas fa-envelope' },
        'PGP Public Key': { url: 'https://keys.openpgp.org/vks/v1/by-fingerprint/0FCC70B9B087CF16D415898CA6985A5F72D873A8', icon: 'fas fa-key' },
      }">
        One Last Dance.
      </SocialCard>
    </div>

    <div class="text">
      <p>
        Meet <strong>Xeniume</strong> (/'zenɪɘm/)!
      </p>
      <p>
        Currently, he's studying in China.
        <br />
        You might be wondering why he's writing in English here. Well, he's honing his English skills and thought this
        would
        be a good opportunity to practise.
      </p>
      <p>
        As he goes through his day, he occasionally encounters fascinating people and intriguing things that truly
        draw him
        in, sparking a desire to <InlineLink to="/links">link</InlineLink> them with others.
      </p>
      <p>
        He has a keen interest in <strong>computer science</strong>, though he prefers not to label himself as a tech
        otaku.
        <br />
        He also enjoys reading <strong>science fiction</strong>, playing <strong>badminton</strong> with friends, and
        sometimes simply
        gazing into space in peaceful <strong>reflexion</strong>.
      </p>
      <p>Ultimately, he's just an ordinary bloke, content with the little things in life.</p>
    </div>
  </div>
</template>
