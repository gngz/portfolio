<template>
    <div v-if="project"  class="main-wrapper">
        <nav class="level top-bar">
            <div class="level-left">
                <div class="level-item has-text-centered">
                    <p class="subtitle"> {{project.name}} </p>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item has-text-centered">
                    <p><router-link :to="{ name: 'home', params: { 'lang' : this.lang }}" class="button back-btn is-success">{{translations.back}}</router-link></p>
                </div>
                
            </div>
        </nav>
        <div class="project">
            <div class="project-description">
                <h1 class="has-text-centered subtitle proj-title is-5">{{translations.description}}</h1>
                <div v-html="desc" class="content "></div>
            </div>
            
            <div v-if="project.images" class="has-text-centered">
                <h1 class="subtitle proj-title proj-title is-4">{{translations.images}}</h1>
                <div class="project-images">
                    <img v-for="(image, key) in project.images" v-bind:key="`image-${key}`" :src="image.url" class="image" v-on:click="showModal(key)"></img>
                </div>
            </div>
            <div v-if="project.links" class="has-text-centered">
                <h1 class="subtitle proj-title proj-title is-4">{{translations.links}}</h1>
                <div class="project-links">
                    <a v-for="(link,key) in project.links" v-bind:key="`link-${key}`" :href="link.url" class="button">
                        <span class="icon">
                            <i class="fab fa-github" v-if="link.type == 'github'"></i>
                            <i class="fab fa-gitlab" v-if="link.type == 'gitlab'"></i>
                            <i class="fas fa-link" v-if="link.type == 'link'"></i>
                        </span>
                        <span> {{link.name}} </span>
                    </a>
                </div>
            </div>
        </div>
        <div v-if="project.images" class="modal" v-bind:class="{ 'is-active':  this.modal.isActive }">
            <div class="modal-background" v-on:click="closeModal"></div>
            <div class="modal-content has-background-light	">
                <div class="modal-image">
                    <img class="modal-image"  :src="project.images[modal.current].url"></img>
                    
                </div>
                <p class="image-desc">{{project.images[modal.current].name}}</p>    
            </div>
            <button v-on:click="closeModal" class="modal-close is-large" aria-label="close"></button>
        </div>

    </div>  
</template>

<script>
import projects from '../services/projects';


const classMap = {
 // h1: 'title is-4',
 // h2: 'title is-2',
}

const bindings = Object.keys(classMap)
  .map(key => ({
    type: 'output',
    regex: new RegExp(`<${key}(.*)>`, 'g'),
    replace: `<${key} class="${classMap[key]}" $1>`
  }));

var converter = new showdown.Converter({
  extensions: [...bindings]
});




export default {
    name: 'project',
    props: ['lang','id'],
    data: function() {
        return {
            project: projects.getProjectById(this.id,this.lang),
            desc: "",
            translations: {},
            modal: {
                "isActive" : false,
                "current" : 0,
            }
        }
    },
    methods: {
        closeModal: function() {
            this.modal.isActive = false;
        },
        showModal: function(id) {
            this.modal.isActive = true;
            this.modal.current = id;
        },

    },
    created: function() {
        if(this.project == undefined){
            this.$router.push({ name: 'home', params: { lang: this.lang } })
        } else {
            this.desc = converter.makeHtml(this.project.description);
            this.translations = projects.getTranslations(this.lang);
        }
        
    }

}

</script>

<style scoped>
.main-wrapper {
    width: 100%;
    height: 100%;
    overflow: auto;
}
.project {
    padding-left: 20%;
    padding-right: 20%;
    height: calc(100% - 70px);
    display: flex;
    flex-direction: column;
}
.top-bar {
    padding: 12px 20% 12px 20%;
    margin-bottom: 0px;
    background-color:lightgray;
}


.project-links, .project-images{
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
}


.project-links > a {
    margin: 5px;
  
}

.project-images > img {
    margin: 5px;
    width: 200px;
    cursor: pointer; 
}

.modal-image {


    display:flex;
    justify-content: center;

    height: auto;
    flex-wrap: wrap;
    margin: 0;
}


.image-desc {
    text-align: center;
    color: black;
    padding-top: 5px;
    padding-bottom: 10px;
}

.proj-title{
    padding-top:12px;
}
.is-vertical-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {

    max-width: 60%!important;
    width: auto!important;
    height: auto!important;
}

.back-btn {
    margin-left: 10px;
    margin-right: 10px;
}



</style>