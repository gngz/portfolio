import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Project from './views/Project.vue'
import projects from './services/projects'

projects.init();
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/',
      name: 'root',
      redirect : projects.getLangList()[0],
      component: Home,
      props: true
    },
    {
      path: '/:lang/project/:id',
      name: 'project',
      component: Project,
      props: true,
      
    },
    {
      path: '/:lang',
      name: 'home',
      component: Home,
      props: true,
      
    },
    
  ]
})
