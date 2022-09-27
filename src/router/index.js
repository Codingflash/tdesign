import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login/Login.vue";
import Home from "../views/Home/Home.vue";
import Form from "../views/Home/Form.vue";
import Info from "../views/Home/Info.vue";
import Video from "../views/Home/Video.vue";
import { LoadingPlugin } from "tdesign-vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: {
      title: "登录",
    },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: "面板",
      auth:true
    },
    children: [
      {
        path: "/form",
        name: "Form",
        component: Form,
        meta: {
          title: "Form",
      auth:true
        },
      },
      {
        path: "/info",
        name: "Info",
        component: Info,
        meta: {
          title: "Info",
      auth:true

        },
      },
      {
        path: "/video",
        name: "Video",
        component: Video,
        meta: {
          title: "Video",
      auth:true

        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'hash',
  base:'/',
  routes,
});

router.beforeEach((to, from, next) => {
  let title = to.meta.title;
  document.title = title;
  if (to.meta.auth) {
    let token = localStorage.getItem("token");
    token = token && token.trim();
    if (token) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;
