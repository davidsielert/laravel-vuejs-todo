require('./bootstrap');
const VueRouter = require('vue-router');

const Lockr = require('lockr');

Lockr.set('username', 'Coyote'); // Saved as string
console.log(Lockr.get('username'));

Vue.use(VueRouter);



import Foo from './components/foo.vue';
const Bar = require('./components/bar.vue');
const Tasks = require('./components/Tasks.vue');

const routes =   [
    {path: '/', component: Foo},
    {path: '/bar', component: Bar},
    {path: '/tasks', component: Tasks}
];

const router = new VueRouter({
    routes
});

Vue.component('tasks', Tasks);
//Vue.component('taskitem', require('./components/TaskItem.vue'));

let session = window.sessionStorage,
    log = console && console.log || function(){};
Vue.http.interceptors.push(function (request, next) {
    if (request.method.toLowerCase() === 'get') {
        var cache = session.getItem(`CACHE_${request.url}`);
        debugger;
        if (request.headers.map.useCache !== "false") {
            if (cache) {
                log('cache hit', request.url);
                next(request.respondWith(JSON.parse(cache), {status: 200, statusText: 'Ok'}));
            } else {
                log('cache miss', request.url);
            }
        } else
            log('cached turned off for request');
    }


    next( function (response) {
        let {status, statusText, body} = response;
        if (status === 200 && request.method.toLowerCase() === 'get') {
            log('cache save', request.url);
            session.setItem(`CACHE_${request.url}`, JSON.stringify(body));
        }
        request.respondWith(body, {status, statusText});
    });
});
const app = new Vue({
    router,
    el: '#app'
});
