import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/Login";
import Auth from "@/utils/auth";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/profile",
      name: "profile",
      component: () =>
        import(/* webpackChunkName: "profile" */ "./views/Profile.vue"),
      beforeEnter: (_to, _from, next) => {
        if (Auth.isLoggedIn()) {
          next();
        } else {
          // redirect to Login
          next({
            path: '/',
            query: { redirect: to.fullPath },
          });
        }
      },
    },
  ],
});

export default router;
