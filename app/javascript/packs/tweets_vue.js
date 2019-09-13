import Vue from 'vue/dist/vue.esm'
import axios from 'axios'

var vm = new Vue({
    el: '#tweets',
    data: {
        tweets: []
    },
    mounted() {
        axios
        .get(`tweets.json`)
        .then(res =>{
        vm.tweets = res.data;
        console.log(vm.tweets);
        })

    }
});
    
