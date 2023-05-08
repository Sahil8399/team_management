import Vuex from 'vuex';
import store from '../store/index'
import data from '../api/data'
export default new Vuex.Store({
    store,
    state:{
        students:[],
        csk:[],
        rcb:[]
    },
    getters:{},
    actions:{
        getStudents(context){
            context.commit('setStudents')
        },
        addTeamMember(context,data){
            context.commit('pushMemberToState', data)
            context.commit('enabledSelectedState', data.index)
            // console.log(data)
        },
        removeFromTeam(context, data){
            context.commit('sliceFromTeam',data)
            context.commit('disabledSelectedState',data)
        }
    },
    mutations:{
        setStudents(state){
            state.students = data.getStudents()
        },
        pushMemberToState(state, data){
            if(data.type == 'CSK'){
                state.csk.push(state.students[data.index])
            }else{
                state.rcb.push(state.students[data.index])
            }
        },
        enabledSelectedState(state,index){
            state.students[index].selected = true
        },
        disabledSelectedState(state,data){
            state.students.forEach((student) => {
                // if(student.id === data.member.id){
                //    return student.selected = false   
                // }else{
                //     return ''  
                // }
                student.id === data.member.id ? student.selected = false : "";
            })
        },
        sliceFromTeam(state, data){
            if(data.type == 'CSK'){
                state.csk.splice(data.index, 1)
            }else{
                state.rcb.splice(data.index, 1)
            }
        }
    }
})