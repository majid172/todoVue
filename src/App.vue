<script setup>
import {onMounted} from 'vue';
import {useTodoStore} from './stores/todo';
const todoStore = useTodoStore();

onMounted(() => {
    todoStore.getAllTodos();
})
</script>

<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
        <h4 class="text-center">TODO LIST</h4>  
        </div>
        <div class="card-body">
         <div my-4>
          <form action="" class="my-2">
            <label for="">Title</label>
            <input type="text" class="form-control" v-model="todoStore.todoForm.title">
            <input type="button" class="btn btn-outline-danger my-3" value="Add Task" @click.prevent="todoStore.createTask">
          </form>
        
         </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="todo in todoStore.todos" :key="todo.id">{{todo.id}}. {{todo.title}}</li>
          
        </ul>
        </div>
    </div>
    </div>

</div>

</div>
  
</template>

<style scoped>

</style>
