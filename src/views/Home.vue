<template>
  <div class="project-list">
   <div class="project-item">
     {{ lang }}
   </div>
   <div class="project-item">
     b
   </div>
   <div class="project-item">
     b
   </div>
   <div class="project-item">
     b
   </div>
   <div class="project-item">
     b
   </div>
   <div class="project-item">
     b
   </div>
   <div class="project-item">
     b
   </div>
   <div class="project-item">
     b
   </div>
  </div>
</template>

<script>

// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue


export default {
  name: 'home',
  data: function () {
    return {
      lang : "pt"
      };
  },
  components: {

  }
}
</script>

<style>


.project-list {
  background: red;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content:  center;
  overflow-y: hidden;


}

.project-item {
  flex-basis: calc(25% + 10px);
  max-width: 200px;
  margin: 10px;
  height: 350px;
  background: blue;
  color: white;

}


</style>