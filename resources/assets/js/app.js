
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
VueRouter = require('vue-router');
Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const Tasks = require('./components/Tasks.vue');
Vue.component('tasks', Tasks);
Vue.component('taskitem',require('./components/TaskItem.vue'));


const Foo = require('./components/foo.vue');
const Bar = require('./components/bar.vue');




const routes = [
    { path: '/', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/tasks', component: Tasks }
]

const router = new VueRouter({
    routes
});


const app = new Vue({
    router
}).$mount('#app')

// const app = new Vue({
//     el: '#app'
// });
