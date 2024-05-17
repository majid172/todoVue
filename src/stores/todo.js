import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useTodoStore = defineStore('todo',{
   state: ()=>({
    todos: [],
    todoForm: {
      title: null,
      userId: 1,
      completed: false
    }
   }),
   getters: {},
   actions:{
    // step 1
    // getAllTodos(){
    //   axios.get('https://jsonplaceholder.typicode.com/todos').then((response)=> {
    //     console.log(response.data);
    //   })
    // }

    // step 2
    async getAllTodos(){
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
      
      this.todos = data;
    },

    // insert data
    async createTask(){
      const {data} = await axios.post('https://jsonplaceholder.typicode.com/todos',this.todoForm);
      console.log(data);
      this.todos.push(data);
      this.todos.reverse();
      this.todoForm.title = null;

    }
   }
})
