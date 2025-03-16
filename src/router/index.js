import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";
import Links from "@/views/LinksView.vue";
import Friends from "@/views/FriendsView.vue";
import BigShots from "@/views/BigShotsView.vue";
import Blogroll from "@/views/BlogrollView.vue";
import NotFound from "@/views/NotFoundView.vue";

import cur from "@/assets/js/cursor.js";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/links", name: "Links", component: Links },
  { path: "/links/friends", name: "Friends", component: Friends },
  { path: "/links/big-shots", name: "BigShots", component: BigShots },
  { path: "/links/blogroll", name: "Blogroll", component: Blogroll },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { left: 0, top: 0, behavior: "smooth" };
  },
});

router.afterEach((_, from) => {
  if (from.name !== undefined) {
    setTimeout(cur.refresh, 0);
  }
})

export default router;
