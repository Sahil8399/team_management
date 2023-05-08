<template>
  <center>
    <div>
      <h2>Students Components</h2>
      <ul>
        <li v-for="(student, index) in students" :key="student.id">{{ student.name }} <i>{{student.game.length }}</i> games he plays <button :disabled="student.selected" @click="addTeamMember('CSK', index)">CSK</button> <button :disabled="student.selected" @click="addTeamMember('RCB', index)">RCB</button> </li>
      </ul>
    </div>
    <hr>
    <TeamComponent type="RCB" />
    <TeamComponent type="CSK" />
  </center>
  </template>
  <script>
  import store from '../store/index'
  import TeamComponent from '../components/TeamComponent.vue'
// import { doesNotReject } from 'assert'
  export default{
    components:{
      TeamComponent
    },
    methods:{
      addTeamMember(type, index){
        store.dispatch("addTeamMember",{type, index})
      }
    },
    computed:{
      students(){
        return store.state.students
         } 
    },
    created(){
      store.dispatch('getStudents')
    }
  }
  </script>