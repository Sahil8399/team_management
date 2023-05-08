<template>
    <h1>Team ({{ type }})</h1>
    <ul>
        <li v-for="(member, index) in team" :key="member.id">{{ member.name }} <button @click="removeFromTeam(type, index, member)">x</button> </li>
    </ul>
    </template>
    <script>
    import store from '../store/index'
    export default{
        props:["type"],
        computed:{
            team(){
                if(this.type === 'CSK'){
                   return store.state.csk
                }else{
                   return store.state.rcb
                }
            }
        },
        methods:{
            removeFromTeam(type, index, member){
                store.dispatch('removeFromTeam',{type, index, member})
            }
        }
    }
    </script>