import Vue from 'vue/dist/vue.esm'
import axios from 'axios'

var vm = new Vue({
    el: '#tweet',
    data: {
        
    },
    mounted() {
        axios
        .get(`/tweets`)
        .then(res =>{
        
        
        })

    },
    methods:{
      
    }
});