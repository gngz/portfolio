import ptLang from '../assets/projectsPT.json';
import enLang from '../assets/projectsEN.json';

export default class Projects {
    
    constructor () {
        this.data = []
        this.langs = []
        this.data.push(enLang)
        this.data.push(ptLang)
        this.data.forEach(function (item) {
            this.langs.push(item.lang)
            
        }.bind(this));


        
        
    }
   
    getLangList() {
        return [...this.langs]
    }
}