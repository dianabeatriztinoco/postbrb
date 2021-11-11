// we have access to this Vue object because of the cdn script we got from 
// v3.vue.org page 
// create app takes in an object 
//data is a function taht returns an obj


const app = Vue.createApp({
    template: '<h1>Hello World{{firstName}}</h1>',
    data(){
        return {
            firstName: 'John'
        }
    }

})

app.mount("#app") //in this we pass whatever our selector is in the mount function which in this case is the id of app 