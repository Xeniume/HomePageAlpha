<script setup>
import NavBar from '@/components/NavBar.vue';
import SocialCard from '@/components/SocialCard.vue';
</script>

<template>
  <NavBar title="Xeniume.Links.Blogroll" path="/links/blogroll" />
  <div class="content">
    <div class="text">
      Roaming the net~
      <br />
      All the links are sorted by the time they were added (and Xeniume may implement a random shuffle function in the
      future).
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

    <div>
      <SocialCard name="JustPureH2O" avatar="https://pic.imgdb.cn/item/667f85b1d9c307b7e9ef9f2c.jpg" :links="{
        'Home': { url: 'https://justpureh2o.cn/', icon: 'fas fa-home' },
        'GitHub': { url: 'https://github.com/JustPureH2O/', icon: 'fab fa-github' },
      }">
        穷方圆平直之情，尽规矩准绳之用
      </SocialCard>
    </div>

    <hr />

    <div class="text">
      <p>
        Feel free to exchange your blogroll with Xeniume.
        <br />
        But before doing that, please carefully read the following requirements (subject to the final revision):
      </p>
      <ul>
        <li>Your blog should contain <strong>original content</strong>. Which means that Xeniume doesn't accept scraped
          or rewritten
          content.</li>
        <li>The domain name of your site is also important. Please do <strong>not</strong> bother applying if it's a
          <strong>free domain</strong>.
        </li>
        <li>As a <strong>general rule</strong>, the domain name should <strong>not</strong> contain any <strong>Chinese
            characteristics</strong>.</li>
        <li>Your site must <strong>not</strong> have undergone the <strong>ICP Filing</strong> (except for MoeICP).</li>
      </ul>
      <p>Here's some information about Xeniume's site:</p>
      <ul>
        <li>name: "Xeniume"</li>
        <li>url: "https://xeniu.me"</li>
        <li>slogan: "One Last Dance."</li>
        <li>avatar: "https://xeniu.me/favicon.jpg" (Well, i know it's not a good image hosting method. )-;</li>
      </ul>
      <p>If you wanna add your site here and have checked that it meets the requirements, just email Xeniume.</p>
    </div>
  </div>
</template>
