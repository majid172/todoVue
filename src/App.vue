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
<div class="card">
<div class="card-header">
<h4 class="text-center">TODO LIST</h4>  
</div>
<div class="card-body">
<ul class="list-group list-group-flush">
  <li class="list-group-item" v-for="todo in todoStore.todos" :key="todo.id">{{todo.id}}. {{todo.title}}</li>
  
</ul>
</div>
</div>

</div>
  
</template>

<style scoped>

</style>
