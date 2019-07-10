<template>
  <div class="project-list">
    <div v-for="(project,pindex) in projects" :key="`project-${pindex}`"  v-on:click="clickHandler(pindex)" class="project-item">
      <i v-if="!project.thumbnail" class="fas fa-code p-icon"></i>
      <div v-if="project.thumbnail">
        <img  :src="project.thumbnail" class="image" v-on:click="showModal(key)"></img>
      </div>
      <div class="project-name">
        <p>{{project.name}}</p>
      </div>
    </div>
   </div>
</template>

<script>

// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue
import projects from '@/services/projects'
import router from '@/router'

export default {
  name: 'home',
  data: function() {
    return {
      projects : []
    }
  },
  props: ['lang'],
  watch : {
       'lang' (to, from){
       console.log("PROAS",to)
    }
  }
  ,
  methods: {
    clickHandler : function (id) {
      router.push({ name: 'project', params: { lang: this.lang, id } })

    }

  },
  created: function () {
    this.projects = projects.getProjectsByLang(this.lang);
    console.log("Projetos",this.projects )
  }

}
  
</script>

<style scoped>


.project-list {
  background: #FDFDFF;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content:  center;
  overflow-y: auto;


}

.project-item {
  position: relative;
  width: 250px;
  margin: 10px;
  height: 300px;
  background: #BBCDE5;
  color: black;
  box-shadow: 5px 5px;
  cursor: pointer;

}

.project-name {
  position: absolute;
  width: inherit;
  bottom:0;
  font-family: 'Dosis', sans-serif;
  background-color: #222222;
  color: white;
  opacity: 0.9;
  min-height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.p-icon {
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: #FDFDFF;
}

</style>