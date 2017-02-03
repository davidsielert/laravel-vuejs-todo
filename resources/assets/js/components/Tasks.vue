<template>
    <div class="container">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">My Tasks</div>
                <div class="panel-body">
                    <form v-on:submit.prevent>
                        <div class="input-group">
                            <input v-model="task.body" type="text" class="form-control" placeholder="Enter Task.."/>
                            <span class="input-group-btn">
                                <button v-on:click="createTask" class="btn btn-primary" type="submit">Add Task</button>
                            </span>
                        </div>
                    </form>
                    <h2>All Tasks</h2>
                    <taskitem v-for="task in list" v-bind:task="task" v-bind:getTasks="getTasks"/>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                list: [],
                task: {
                    body: ''
                }
            };
        },
        mounted: function () {
            this.getTasks();
        },
        components: {
            taskitem: require('./taskitem.vue')
        },
        methods: {
            createTask:function(task) {
                console.log('creating');
                this.$http.post('api/task/store', this.task).then(response => {
                    this.task.body = '';
                    this.getTasks();
                    toastr.success('Task created successfully!')
                })

            },
            getTasks(useCache ) {
                //can't set boolean vars for headers ..
                debugger;
                if (useCache == false) useCache = "false";
                if (useCache == true) useCache = "true";

                this.$http.get('api/tasks',{headers:{useCache}}).then(response => {
                    console.log('response',response);
                    this.list = response.body;
                }, response => {
                    toastr.error('Error while retrieving tasks');
                })
            }


        }
    }
</script>