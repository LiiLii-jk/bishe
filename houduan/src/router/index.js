import Vue from "vue";
import VueRouter from "vue-router";

import App from "../pageVue/App.vue";
import Personal from "../pageVue/Personal.vue"
import Interface from "../pageVue/Interface.vue"
import visitorApp from "../pageVue/visitorApp.vue"
import login from "../pageVue/login.vue"

Vue.use(VueRouter);

const router =new VueRouter({
  routes:[
    {path:'/',redirect:'/visitorhome'},
    {path:'/home',component:App},
    {path:'/personal',component:Personal},
    {path:'/interface',component:Interface},
    {path:'/visitorhome',component:visitorApp},
    {path:'/login',component:login}
  ]
});

//声明前置导航守卫
router.beforeEach(function(to,from,next){
  if(to.path === '/home'){
    const token = localStorage.getItem('token');
    if(token){
      next();
    }else{
      next('/login');
    }
  }else{
    next();
  }
  // next();
})

export default router;