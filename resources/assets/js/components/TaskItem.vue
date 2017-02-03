<template>
    <div class="task panel panel-default" >
        <div class="panel-body">
            <span v-show="!edit">{{task.body}}</span>
            <input v-show="edit" type="text" v-model="task.body" class="col-md-12"/>
        </div>
        <div class="panel-footer">
            <div v-show="!edit">
                <button v-on:click="deleteTask(task)" class="btn btn-danger">Delete</button>
                <button v-on:click="editTask(task)" class="btn btn-info">Edit</button>
            </div>
            <button v-show="edit" v-on:click="saveTask(task)" class="btn btn-info">Save</button>
            <button v-show="edit" v-on:click="cancelEdit()" class="btn btn-danger">Cancel</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['task','getTasks'],
        data: function() {
            return {
                edit: false,
            }
        },
        mounted() {
            console.log('TaskItem mounted.')
        },
        methods: {
            editTask: function (task) {
                this.edit = true;
            },
            cancelEdit: function(task) {
                this.edit = false;

            },
            deleteTask: function (task) {
               this.$http.delete('api/task/'+task.id).then(response => {
                   toastr.success('Task successfully deleted!')
                   this.getTasks(false);
               })
            },
            saveTask(task) {
                this.$http.patch('api/task/'+task.id,task).then(response => {
                   toastr.success('Task successfully updated!');
                   this.edit = false;
                   this.getTasks(false);
                },response => {
                    toastr.error('error updating task!');
                });
            }
        }
    }
</script>
