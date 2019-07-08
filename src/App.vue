<template>
  <div id="app">
    <nav id="nav" class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <!-- navbar items, navbar burger... -->
        <a class="navbar-item" href="#">PORTFÓLIO {{ selected_lang }}</a>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <a class="navbar-item" v-for="lang in lang_list" v-bind:key="lang" v-on:click="setLang(lang)"> {{lang}} </a>
          </div>
        </div>
      </div>
    </nav>
    <div class="main-container">
      <router-view/>
    </div>
    <footer>
      <p> Made with <i class="fas fa-heart"></i> by <a href="//diogopassos.pt">DiogoPassos.pt</a></p>
    </footer>
  </div>
</template>


<script>

import Projects from '@/services/projects'
import router from './router'

var projects = new Projects();



export default {
  name: "app",
  data: function () {
    return {
      selected_lang: ""
    }
  },
  methods: {
    setLang : function (lang) {
      this.selected_lang = lang;
      console.log("newlang", lang)
      router.push('/')
    }
  },
  created: function () {
    this.lang_list = projects.getLangList();
    this.selected_lang = this.lang_list[0];
    
  }
}



</script>



<style>
html {
  overflow: hidden;
}
.main-container {
  width: 100%;
  height: calc(100vh - 108px);

}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  height: 52px;

}

footer a {
  text-decoration: none;
  color: black;
}
</style>
