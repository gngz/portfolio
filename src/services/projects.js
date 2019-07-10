import ptLang from '../assets/projectsPT.json';
import enLang from '../assets/projectsEN.json';

var data;
var langs;

export default {

    init : function () {
        data = []
        langs = []
        data.push(enLang)
        data.push(ptLang)
        data.forEach(function (item) {
            langs.push(item.lang)
            
        });
    },

    getLangList : function () {
        return [...langs]
    },

    getProjectsByLang: function (lang) {
        return data.filter(data_item => data_item.lang == lang)[0].projects;
    },

    getProjectById: function (id,lang) {
        var plist = this.getProjectsByLang(lang);

        return plist[id];
    },

    getTranslations : function (lang) {
        var lang_list  = data.filter(data_item => data_item.lang == lang)[0];
        return lang_list.translations;
    }
}